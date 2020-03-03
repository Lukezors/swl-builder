import { RANKS, UPGRADE_TYPES, FACTIONS, UNIT_TYPES } from "../util/constants";

export const data = {
  units: {
    [FACTIONS.REBEL]: {
      Commander: [
        {
          name: "Luke Skywalker",
          point_cost: 160,
          rank: RANKS.COMMANDER,
          faction: FACTIONS.REBEL,
          type: UNIT_TYPES.TROOPER,
          upgrades_slots: [
            UPGRADE_TYPES.FORCE,
            UPGRADE_TYPES.FORCE,
            UPGRADE_TYPES.GEAR
          ]
        },
        {
          name: "Leia Organa",
          point_cost: 90,
          rank: RANKS.COMMANDER,
          faction: FACTIONS.REBEL,
          type: UNIT_TYPES.TROOPER,
          upgrades_slots: [
            UPGRADE_TYPES.COMMAND,
            UPGRADE_TYPES.COMMAND,
            UPGRADE_TYPES.GEAR
          ]
        }
      ],
      [RANKS.OPERATIVE]: [
        {
          name: "Chewbacca",
          point_cost: 95,
          rank: RANKS.OPERATIVE,
          faction: FACTIONS.REBEL,
          type: UNIT_TYPES.TROOPER,
          upgrades_slots: [
            UPGRADE_TYPES.TRAINING,
            UPGRADE_TYPES.TRAINING,
            UPGRADE_TYPES.GEAR
          ]
        }
      ],
      [RANKS.CORPS]: [
        {
          name: "Rebel Troopers",
          point_cost: 40,
          rank: RANKS.CORPS,
          faction: FACTIONS.REBEL,
          type: UNIT_TYPES.TROOPER,
          upgrades_slots: [
            UPGRADE_TYPES.HEAVY_WEAPON,
            UPGRADE_TYPES.PERSONNEL,
            UPGRADE_TYPES.GEAR,
            UPGRADE_TYPES.GRENADES
          ],
          restricted_upgrades: []
        }
      ],
      [RANKS.SPECIAL_FORCES]: [
        {
          name: "Wookie Warriors",
          point_cost: 75,
          rank: RANKS.SPECIAL_FORCES,
          faction: FACTIONS.REBEL,
          type: UNIT_TYPES.TROOPER,
          upgrades_slots: [
            UPGRADE_TYPES.HEAVY_WEAPON,
            UPGRADE_TYPES.TRAINING,
            UPGRADE_TYPES.TRAINING,
            UPGRADE_TYPES.GEAR,
            UPGRADE_TYPES.GRENADES
          ],
          restricted_upgrades: []
        }
      ],
      [RANKS.SUPPORT]: [
        {
          name: "AT-RT",
          point_cost: 55,
          rank: RANKS.SUPPORT,
          faction: FACTIONS.REBEL,
          type: UNIT_TYPES.GROUND_VEHICLE,
          upgrades_slots: [UPGRADE_TYPES.HARDPOINT, UPGRADE_TYPES.COMMS],
          restricted_upgrades: []
        }
      ],
      [RANKS.HEAVY]: [
        {
          name: "AirSpeeder",
          point_cost: 140,
          rank: RANKS.HEAVY,
          faction: FACTIONS.REBEL,
          type: UNIT_TYPES.REPULSOR_VEHICLE,
          upgrades_slots: [
            UPGRADE_TYPES.PILOT,
            UPGRADE_TYPES.HARDPOINT,
            UPGRADE_TYPES.COMMS
          ],
          restricted_upgrades: []
        }
      ]
    }
  },
  upgrades: {
    [UPGRADE_TYPES.GEAR]: [
      {
        name: "Recon Intel",
        point_cost: 2
      },
      {
        name: "Targeting Scopes",
        point_cost: 4
      },
      {
        name: "Grappling Hooks",
        point_cost: 3
      }
    ],
    [UPGRADE_TYPES.FORCE]: [
      {
        name: "Force Reflexes",
        point_cost: 10
      },
      {
        name: "Force Push",
        point_cost: 10
      }
    ]
  }
};
