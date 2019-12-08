import { sum, getFaction, calculateUsage } from "./jsonUtils";
import { FACTIONS, RANKS } from "./constants";

it("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toEqual(3);
});

test("check data", () => {
  expect(getFaction(FACTIONS.REBEL)).toBeDefined();
});

test("Check usage generates correct values", () => {
  const testData = {
    "1": {
      name: "Rebel Troopers",
      point_cost: 40,
      rank: "Corps",
      faction: "Rebel",
      type: "Trooper",
      upgrades_slots: ["Heavy Weapon", "Personnel", "Gear", "Grenades"],
      restricted_upgrades: []
    },
    "2": {
      name: "Rebel Troopers",
      point_cost: 40,
      rank: "Corps",
      faction: "Rebel",
      type: "Trooper",
      upgrades_slots: ["Heavy Weapon", "Personnel", "Gear", "Grenades"],
      restricted_upgrades: [],
      selected_upgrades: {
        "2": {
          name: "Grappling Hooks",
          point_cost: 3
        }
      }
    }
  };

  let results = calculateUsage(testData);
  expect(results.points).toEqual(83);
  expect(results.slots[RANKS.COMMANDER]).toEqual(0);
  expect(results.slots[RANKS.CORPS]).toEqual(2);
});

test("Check usage generates correct values when upgrade has been removed", () => {
  const testData = {
    "1": {
      name: "Rebel Troopers",
      point_cost: 40,
      rank: "Corps",
      faction: "Rebel",
      type: "Trooper",
      upgrades_slots: ["Heavy Weapon", "Personnel", "Gear", "Grenades"],
      restricted_upgrades: []
    },
    "2": {
      name: "Rebel Troopers",
      point_cost: 40,
      rank: "Corps",
      faction: "Rebel",
      type: "Trooper",
      upgrades_slots: ["Heavy Weapon", "Personnel", "Gear", "Grenades"],
      restricted_upgrades: [],
      selected_upgrades: {
        "2": undefined
      }
    }
  };

  let results = calculateUsage(testData);
  expect(results.points).toEqual(80);
  expect(results.slots[RANKS.COMMANDER]).toEqual(0);
  expect(results.slots[RANKS.CORPS]).toEqual(2);
});
