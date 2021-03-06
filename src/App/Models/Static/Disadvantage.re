type cost =
  | Flat(int)
  | PerLevel(list(int));

type overwritePrerequisite =
  | Hide
  | ReplaceWith(string);

type t = {
  id: string,
  name: string,
  cost,
  noMaxAPInfluence: bool,
  isExclusiveToArcaneSpellworks: bool,
  input: option(string),
  max: option(int),
  levels: option(int),
  select: option(list(SelectOption.t)),
  rules: string,
  range: option(string),
  actions: option(string),
  prerequisites: Prerequisites.tWithLevelDisAdv,
  prerequisitesText: option(string),
  prerequisitesTextIndex: IntMap.t(overwritePrerequisite),
  prerequisitesTextStart: option(string),
  prerequisitesTextEnd: option(string),
  apValue: option(string),
  apValueAppend: option(string),
  gr: int,
  src: list(SourceRef.t),
  errata: list(Erratum.t),
};
