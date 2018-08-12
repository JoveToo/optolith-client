/**
 * Handles activation, deactivation and level change of active `Activatable`
 * entries.
 *
 * @file src/utils/activatableActivationUtils.ts
 * @author Lukas Obermann
 * @since 1.1.0
 */

import R from 'ramda';
import * as Data from '../types/data';
import * as Wiki from '../types/wiki';
import { convertUIStateToActiveObject } from './activatableConvertUtils';
import { createActivatableDependent } from './createEntryUtils';
import { Just, List, Maybe, OrderedMap, Record } from './dataUtils';
import * as DependencyUtils from './dependencyUtils';
import { flattenPrerequisites } from './flattenPrerequisites';
import { removeHeroListStateItem, setHeroListStateItem } from './heroStateUtils';
import { getGeneratedPrerequisites } from './prerequisitesUtils';
import { ActivatableReducer, OptionalActivatableReducer } from './reducerUtils';
import { isActivatableDependentUnused } from './unusedEntryUtils';

export interface ActivatableActivatePayload extends ActivatableActivateOptions {
  wiki: Wiki.WikiActivatable;
  instance?: Record<Data.ActivatableDependent>;
}

export interface ActivatableActivateOptions {
  id: string;
  sel?: string | number;
  sel2?: string | number;
  input?: string;
  tier?: number;
  cost: number;
  customCost?: number;
}

type ChangeActive =
  (activeArr: List<Record<Data.ActiveObject>>) => List<Record<Data.ActiveObject>>;

const getStaticPrerequisites = (
  active: Record<Data.ActiveObject>,
  prerequisites: Wiki.LevelAwarePrerequisites
): List<Wiki.AllRequirements> =>
  flattenPrerequisites(
    prerequisites,
    Maybe.fromMaybe(1, active.lookup('tier'))
  );

/**
 * Get matching flattened final static and dynamic prerequisites.
 * @param wikiEntry
 * @param instance
 * @param active
 */
export const getCombinedPrerequisites = (
  wikiEntry: Wiki.WikiActivatable,
  instance: Maybe<Record<Data.ActivatableDependent>>,
  active: Record<Data.ActiveObject>,
  add: boolean,
): List<Wiki.AllRequirements> =>
  Maybe.fromJust(
    Maybe.Just(
      getStaticPrerequisites(active, wikiEntry.get('prerequisites'))
    )
      .concat(
        getGeneratedPrerequisites(wikiEntry, instance, active, add)
      )
  );

/**
 * Calculates changed instance.
 * @param instance
 * @param changeActive
 */
const getChangedInstance = (
  instance: Record<Data.ActivatableDependent>,
  changeActive: ChangeActive,
) => (state: Record<Data.HeroDependent>): Record<Data.HeroDependent> => {
  const changeInstance = R.pipe(
    changeActive,
    active => (
      instance.merge(Record.of({ active })) as
      Record<Data.ActivatableDependent>
    ),
    current =>
      isActivatableDependentUnused(current)
      ? removeHeroListStateItem(instance.get('id'))
      : setHeroListStateItem(instance.get('id'))(current)
  );

  return Maybe.fromMaybe(state, changeInstance(instance.get('active'))(state));
};

/**
 * Adds or removes active instance and related prerequisites based on passed
 * functions.
 * @param getActive
 * @param changeDependencies
 * @param changeActive
 * @param add If an entry should be added or removed.
 */
const changeActiveLength = (
  getActive: (instance: Record<Data.ActivatableDependent>) => Record<Data.ActiveObject>,
  changeDependencies: typeof DependencyUtils.addDependencies,
  changeActive: ChangeActive,
  add: boolean,
) => (
  state: Record<Data.HeroDependent>,
  wikiEntry: Wiki.WikiActivatable,
  instance: Maybe<Record<Data.ActivatableDependent>>,
) => {
  const justInstance = Maybe.fromMaybe(
    createActivatableDependent(wikiEntry.get('id')),
    instance
  );

  const active = getActive(justInstance);

  return changeDependencies(
    getChangedInstance(justInstance, changeActive)(state),
    getCombinedPrerequisites(wikiEntry, instance, active, add),
    wikiEntry.get('id'),
  );
};

/**
 * Activates the entry with the given parameters and adds all needed
 * dependencies.
 * @param active The `ActiveObject`.
 */
export const activateByObject =
  (active: Record<Data.ActiveObject>): OptionalActivatableReducer =>
    changeActiveLength(
      () => active,
      DependencyUtils.addDependencies,
      arr => arr.append(active),
      true
    );

/**
 * Activates the entry with the given parameters and adds all needed
 * dependencies.
 * @param x0 The object given by the view.
 */
export const activate = R.pipe(
  convertUIStateToActiveObject,
  activateByObject,
);

/**
 * Deactivates the entry with the given parameters and removes all previously
 * needed dependencies.
 * @param index The index of the `ActiveObject` in `obj.active`.
 */
export const deactivate =
  (index: number): ActivatableReducer => (state, wikiEntry, instance) =>
    Maybe.fromMaybe(
      state,
      instance.get('active').head()
        .fmap(head =>
          changeActiveLength(
            () => head,
            DependencyUtils.removeDependencies,
            arr => arr.deleteAt(index),
            false
          )(state, wikiEntry, Just(instance))
        )
    );

/**
 * Changes the tier of a specific active entry and adds or removes dependencies
 * if needed.
 * @param index The index of the `ActiveObject` in `instance.active`.
 * @param tier The final tier.
 */
export function setTier(index: number, tier: number): ActivatableReducer {
  return (state, wikiEntry, instance) => {
    const previousActive = instance.get('active');
    const previousTier = previousActive
      .subscript(index)
      .bind(target => target.lookup('tier'));

    const active = previousActive.modifyAt(
      index,
      prev => prev.insert('tier', tier),
    );

    const firstState = setHeroListStateItem(
      instance.get('id'),
      instance.insert('active', active),
      state
    );

    const prerequisites = wikiEntry.get('prerequisites');

    if (
      Maybe.isJust(firstState)
      && prerequisites instanceof OrderedMap
      && Maybe.isJust(previousTier)
      && Maybe.fromJust(previousTier) !== tier
    ) {
      const flatPrerequisites = flattenPrerequisites(
        prerequisites,
        Maybe.fromJust(previousTier),
        tier,
      );

      if (Maybe.fromJust(previousTier) > tier) {
        return DependencyUtils.removeDependencies(
          Maybe.fromJust(firstState),
          flatPrerequisites,
          instance.get('id'),
        );
      }
      else {
        return DependencyUtils.addDependencies(
          Maybe.fromJust(firstState),
          flatPrerequisites,
          instance.get('id'),
        );
      }
    }

    return state;
  };
}