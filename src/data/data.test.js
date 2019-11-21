import PropTypes from "prop-types";

import {getFaction} from "../util/jsonUtils";
import {unitTemplate} from "./dataTemplates";

const originalConsoleError = console.error;

beforeAll(() => {
  console.error = message => {
    throw new Error(message);
  };
});

afterAll(() => {
  console.error = originalConsoleError;
});

it("Validates json", () => {
    const rebels = getFaction("rebel");
    rebels.Commander.forEach(element => {
        console.log(element);
        PropTypes.checkPropTypes(unitTemplate, element);
    });
});
