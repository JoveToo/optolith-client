// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var JsonStrict$OptolithClient = require("../Utilities/JsonStrict.bs.js");

function tL10n(json) {
  return {
          id: Json_decode.field("id", Json_decode.$$int, json),
          name: Json_decode.field("name", Json_decode.string, json)
        };
}

function tUniv(json) {
  return {
          id: Json_decode.field("id", Json_decode.$$int, json),
          numId: JsonStrict$OptolithClient.optionalField("numId", Json_decode.$$int, json),
          primary: JsonStrict$OptolithClient.optionalField("primary", Json_decode.$$int, json),
          aeMod: JsonStrict$OptolithClient.optionalField("aeMod", Json_decode.$$float, json),
          canLearnCantrips: Json_decode.field("canLearnCantrips", Json_decode.bool, json),
          canLearnSpells: Json_decode.field("canLearnSpells", Json_decode.bool, json),
          canLearnRituals: Json_decode.field("canLearnRituals", Json_decode.bool, json),
          allowMultipleTraditions: Json_decode.field("allowMultipleTraditions", Json_decode.bool, json),
          isDisAdvAPMaxHalved: Json_decode.field("isDisAdvAPMaxHalved", Json_decode.bool, json),
          areDisAdvRequiredApplyToMagActionsOrApps: Json_decode.field("areDisAdvRequiredApplyToMagActionsOrApps", Json_decode.bool, json)
        };
}

function t(univ, l10n) {
  return {
          id: univ.id,
          numId: univ.numId,
          name: l10n.name,
          primary: univ.primary,
          aeMod: univ.aeMod,
          canLearnCantrips: univ.canLearnCantrips,
          canLearnSpells: univ.canLearnSpells,
          canLearnRituals: univ.canLearnRituals,
          allowMultipleTraditions: univ.allowMultipleTraditions,
          isDisAdvAPMaxHalved: univ.isDisAdvAPMaxHalved,
          areDisAdvRequiredApplyToMagActionsOrApps: univ.areDisAdvRequiredApplyToMagActionsOrApps
        };
}

var Decode = {
  tL10n: tL10n,
  tUniv: tUniv,
  t: t
};

exports.Decode = Decode;
/* No side effect */
