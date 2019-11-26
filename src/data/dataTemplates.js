import PropTypes from "prop-types";
import { RANKS, UPGRADE_TYPES, FACTIONS, UNIT_TYPES } from "../util/constants";

export const upgradeTemplate = {
  name: PropTypes.string,
  point_cost: PropTypes.number
};

/*TODO: Flesh this out
 *  Not required for phase one as not needed for building an army,
 * but could be useful for card searchs */
export const statsTemplate = {
  keywords: PropTypes.arrayOf(PropTypes.string),
  health: PropTypes.number
};

export const unitTemplate = {
  name: PropTypes.string.isRequired,
  point_cost: PropTypes.number.isRequired,
  rank: PropTypes.oneOf(Object.values(RANKS)),
  faction: PropTypes.oneOf(Object.values(FACTIONS)).isRequired,
  type: PropTypes.oneOf(Object.values(UNIT_TYPES)),
  upgrade_slots: PropTypes.arrayOf(
    PropTypes.oneOf(Object.values(UPGRADE_TYPES))
  ),
  restricted_upgrades: PropTypes.arrayOf(PropTypes.shape(upgradeTemplate))
};
