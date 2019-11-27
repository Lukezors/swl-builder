import {data} from "../data/data";
import {RANKS} from "./constants";

export const sum = (i, x) => i + x;

export const getFaction = factionName => data.units[factionName];

export const calculateUsage = (unitList) => {
    let usage = {
        points: 0,
        slots: {
            [RANKS.COMMANDER]: 0,
            [RANKS.OPERATIVE]: 0,
            [RANKS.CORPS]: 0,
            [RANKS.SPECIAL_FORCES]: 0,
            [RANKS.SUPPORT]: 0,
            [RANKS.HEAVY]: 0,
        }
    };

    let currentUnit;
    Object.keys(unitList).forEach(key => {
        currentUnit = unitList[key];
        usage.points += currentUnit.point_cost;
        usage.slots[currentUnit.rank]++;
    });

    return usage;
};

