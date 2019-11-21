import PropTypes from "prop-types";

import {getFaction} from "../util/jsonUtils";
import {unitTemplate} from "./dataTemplates";


beforeAll(() => {
  console.error = jest.fn(message => {
    throw new Error(message);
  });
});

afterAll(() => {
  console.error.mockReset();
});

it("Validates json", () => {
    const rebels = getFaction("rebel");
    rebels.Commander.forEach(element => {
        console.log(element);
        PropTypes.checkPropTypes(unitTemplate, element);
    });
});
