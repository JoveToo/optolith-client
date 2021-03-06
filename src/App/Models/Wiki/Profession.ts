import { List } from "../../../Data/List"
import { Just, Maybe, Nothing } from "../../../Data/Maybe"
import { fromDefault, makeLenses, Record } from "../../../Data/Record"
import { Category } from "../../Constants/Categories"
import { ProfessionId } from "../../Constants/Ids"
import { translate } from "../../Utilities/I18n"
import { ProfessionRequireActivatable } from "./prerequisites/ActivatableRequirement"
import { ProfessionSelections } from "./professionSelections/ProfessionAdjustmentSelections"
import { Erratum } from "./sub/Errata"
import { IncreaseSkill } from "./sub/IncreaseSkill"
import { IncreaseSkillList } from "./sub/IncreaseSkillList"
import { NameBySex } from "./sub/NameBySex"
import { SourceLink } from "./sub/SourceLink"
import { StaticDataRecord } from "./WikiModel"
import { EntryWithCategory, ProfessionDependency, ProfessionPrerequisite } from "./wikiTypeHelpers"

export interface Profession {
  "@@name": "Profession"
  id: string
  name: string | Record<NameBySex>
  subname: Maybe<string | Record<NameBySex>>
  ap: Maybe<number>
  dependencies: List<ProfessionDependency>
  prerequisites: List<ProfessionPrerequisite>
  prerequisitesStart: Maybe<string>
  prerequisitesEnd: Maybe<string>
  selections: Record<ProfessionSelections>
  specialAbilities: List<Record<ProfessionRequireActivatable>>
  combatTechniques: List<Record<IncreaseSkill>>
  skills: List<Record<IncreaseSkill>>
  spells: List<Record<IncreaseSkill> | Record<IncreaseSkillList>>
  liturgicalChants: List<Record<IncreaseSkill> | Record<IncreaseSkillList>>
  blessings: List<string>
  suggestedAdvantages: List<string>
  suggestedAdvantagesText: Maybe<string>
  suggestedDisadvantages: List<string>
  suggestedDisadvantagesText: Maybe<string>
  unsuitableAdvantages: List<string>
  unsuitableAdvantagesText: Maybe<string>
  unsuitableDisadvantages: List<string>
  unsuitableDisadvantagesText: Maybe<string>
  isVariantRequired: boolean
  variants: List<string>
  gr: number

  /**
   * Divides the groups into smaller subgroups, e.g. "Mage", "Blessed One of the
   * Twelve Gods" or "Fighter".
   */
  subgr: number
  src: List<Record<SourceLink>>
  errata: List<Record<Erratum>>
  category: Category
}

export const Profession =
  fromDefault ("Profession")
              <Profession> ({
                id: "",
                name: "",
                subname: Nothing,
                ap: Nothing,
                dependencies: List.empty,
                prerequisites: List.empty,
                prerequisitesStart: Nothing,
                prerequisitesEnd: Nothing,
                selections: ProfessionSelections.default,
                specialAbilities: List.empty,
                combatTechniques: List.empty,
                skills: List.empty,
                spells: List.empty,
                liturgicalChants: List.empty,
                blessings: List.empty,
                suggestedAdvantages: List.empty,
                suggestedAdvantagesText: Nothing,
                suggestedDisadvantages: List.empty,
                suggestedDisadvantagesText: Nothing,
                unsuitableAdvantages: List.empty,
                unsuitableAdvantagesText: Nothing,
                unsuitableDisadvantages: List.empty,
                unsuitableDisadvantagesText: Nothing,
                isVariantRequired: false,
                variants: List.empty,
                category: Category.PROFESSIONS,
                gr: 0,
                subgr: 0,
                src: List.empty,
                errata: List (),
              })

export const ProfessionL = makeLenses (Profession)

export const isProfession =
  (r: EntryWithCategory) => Profession.AL.category (r) === Category.PROFESSIONS

export const getCustomProfession =
  (staticData: StaticDataRecord) =>
    Profession ({
      id: ProfessionId.CustomProfession,
      name: translate (staticData) ("profession.ownprofession"),
      subname: Nothing,
      ap: Just (0),
      dependencies: Nothing,
      prerequisites: Nothing,
      prerequisitesStart: Nothing,
      prerequisitesEnd: Nothing,
      selections: Nothing,
      specialAbilities: Nothing,
      combatTechniques: Nothing,
      skills: Nothing,
      spells: Nothing,
      liturgicalChants: Nothing,
      blessings: Nothing,
      suggestedAdvantages: Nothing,
      suggestedAdvantagesText: Nothing,
      suggestedDisadvantages: Nothing,
      suggestedDisadvantagesText: Nothing,
      unsuitableAdvantages: Nothing,
      unsuitableAdvantagesText: Nothing,
      unsuitableDisadvantages: Nothing,
      unsuitableDisadvantagesText: Nothing,
      isVariantRequired: Nothing,
      variants: Nothing,
      category: Nothing,
      gr: 0,
      subgr: 0,
      src: List (),
      errata: List (),
    })
