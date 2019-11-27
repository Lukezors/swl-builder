import {sum, getFaction, calculateUsage} from './jsonUtils'
import {FACTIONS, RANKS} from "./constants";


it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toEqual(3);
});

test('check data', () => {
    expect(getFaction(FACTIONS.REBEL)).toBeDefined()
});

test('Check usage generates correct values', () => {
    const testData = {
        "1": {
            "name": "Rebel Troopers",
            "point_cost": 40,
            "rank": "Corps",
            "faction": "Rebel",
            "type": "Trooper",
            "upgrades_slots": [
                "Heavy Weapon",
                "Personnel",
                "Gear",
                "Grenades"
            ],
            "restricted_upgrades": []
        },
        "2": {
            "name": "Rebel Troopers",
            "point_cost": 40,
            "rank": "Corps",
            "faction": "Rebel",
            "type": "Trooper",
            "upgrades_slots": [
                "Heavy Weapon",
                "Personnel",
                "Gear",
                "Grenades"
            ],
            "restricted_upgrades": []
        }
    };

    let results = calculateUsage(testData);
    expect(results.points).toEqual(80);
    expect(results.slots[RANKS.COMMANDER]).toEqual(0);
    expect(results.slots[RANKS.CORPS]).toEqual(2);
});

