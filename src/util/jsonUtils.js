import data from 'data/unitOptions'

export const sum = (i, x) => {
    return i + x;
};

export const getFaction = (factionName) => {
    return data.units[factionName];
};