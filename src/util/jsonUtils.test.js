import {sum, getFaction} from './jsonUtils'
import {FACTIONS} from "./constants";


it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toEqual(3);
});

test('check data', () => {
    expect(getFaction(FACTIONS.REBEL)).toBeDefined()
});

