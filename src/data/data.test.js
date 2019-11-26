import PropTypes from "prop-types";

import { getFaction } from "../util/jsonUtils";
import { unitTemplate } from "./dataTemplates";
import { FACTIONS, RANKS } from "../util/constants";

beforeAll(() => {
  console.error = jest.fn(message => {
    throw message;
  });
});

afterAll(() => {
  console.error.mockReset();
});

it("Validates json", () => {
  let currentUnit, faction;
  Object.values(FACTIONS).forEach(factionName => {
    faction = getFaction(factionName);
    if (faction === undefined) {
      return;
    }
    try {
      Object.values(RANKS).forEach(rank => {
        faction[rank].forEach(unit => {
          currentUnit = unit;
          PropTypes.checkPropTypes(unitTemplate, unit);
        });
      });
    } catch (e) {
      //log current unit and message for debugging
      console.log(currentUnit);
      console.log(e);
      throw "Validation Error";
    }
  });
});
