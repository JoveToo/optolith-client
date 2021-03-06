type t = {
  id: Ids.selectOptionId,
  name: string,
  cost: option(int),
  prerequisites: option(unit),
  description: option(string),
  isSecret: option(bool),
  languages: option(list(int)),
  continent: option(int),
  isExtinct: option(bool),
  specializations: option(list(string)),
  specializationInput: option(string),
  gr: option(int),
  level: option(int),
  target: option(string),
  applications: option(list(Skill.Application.t)),
  applicationInput: option(string),
  src: list(SourceRef.t),
  errata: list(Erratum.t),
};
