import PropTypes from "prop-types";
import {RANKS} from "../util/constants";

export const unitTemplate = {
    name: PropTypes.string.isRequired,
    point_cost: PropTypes.number.isRequired,
    rank: PropTypes.oneOf(Object.values(RANKS)),
    faction: PropTypes.string.isRequired,
    type: PropTypes.string,
    keywords: PropTypes.string,
    upgrade_slots: PropTypes.arrayOf(PropTypes.string),
    restricted_upgrades: PropTypes.array
};