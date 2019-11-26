import {data} from "../data/data";

export const sum = (i, x) => i + x;

export const getFaction = factionName => data.units[factionName];
