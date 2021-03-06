/**
 * The Improvement Cost for an entry with a numeric value.
 */
type t =
  | A
  | B
  | C
  | D
  | E;

/**
 * Get the IC-specific multiplier for calculating AP cost.
 *
 * This is the exact AP cost value for adding (or removing) spells and
 * liturgical chants as well as the improvement cost value for skills up to
 * SR 12 and attributes up to 14.
 */
let getAPCostBaseByIC = ic =>
  switch (ic) {
  | A => 1
  | B => 2
  | C => 3
  | D => 4
  | E => 15
  };

/**
 * Get the IC-specific last SR where the AP cost for one points equals the cost
 * for each previous point.
 */
let getLastSRWithConstantCost = ic => ic === E ? 14 : 12;

/**
 * Returns the value that has to be multiplied with the AP cost base to get the
 * final cost for the given SR.
 */
let getBaseMultiplier = (ic, sr) =>
  sr - getLastSRWithConstantCost(ic) + 1 |> Int.max(1);

/**
 * Returns the AP cost for a single SR with a specific IC.
 */
let getCost = (ic, sr) => getAPCostBaseByIC(ic) * getBaseMultiplier(ic, sr);

/**
 * Returns the AP cost between the defined lower and upper SR. The AP cost for
 * the lower bound are not included, as they would have been already paid or you
 * would not get the AP to get to that same SR.
 */
let getAPForBounds = (ic, l, u) =>
  Ix.range((l + 1, u))
  |> List.fold_right(sr => getCost(ic, sr) |> (+), _, 0);

/**
 * `getAPRange ic fromSR toSR` returns the AP cost for the given SR range.
 */
[@gentype]
let getAPForRange = (ic, fromSR, toSR) =>
  fromSR < toSR
    ? getAPForBounds(ic, fromSR, toSR)
    : fromSR > toSR ? - getAPForBounds(ic, toSR, fromSR) : 0;

[@gentype]
let getAPForInc = (ic, fromSR) => getCost(ic, fromSR + 1);

[@gentype]
let getAPForDec = (ic, fromSR) => - getCost(ic, fromSR);

[@gentype]
let getAPForActivatation = getAPCostBaseByIC;

/**
 * Returns the name of the passed Improvement Cost.
 */
[@gentype]
let icToStr = ic =>
  switch (ic) {
  | A => "A"
  | B => "B"
  | C => "C"
  | D => "D"
  | E => "E"
  };
