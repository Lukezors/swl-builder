import React, { useState } from "react";
import PropTypes from "prop-types";

import {upgradeTemplate} from "../data/dataTemplates"

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const UpgradeButton = ({
  type,
  upgrades,
  upgradeFunction,
  unitKey,
  upgradeKey
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedUpgrade, setSelectedUpgrade] = useState(undefined);

  const displayUpgradeOptions = event => {
    setAnchorEl(event.currentTarget);
  };

  const onUpgradeSelect = upgrade => {
    setSelectedUpgrade(upgrade);
    upgradeFunction(unitKey, upgradeKey, upgrade);
    setAnchorEl(null);
  };

  return (
    <>
      <Button variant="contained" onClick={displayUpgradeOptions}>
        {selectedUpgrade ? selectedUpgrade.name : type}
      </Button>
      <Menu
        id="upgrade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={anchorEl != null}
        onClose={() => onUpgradeSelect(selectedUpgrade)}
      >
        {(upgrades && upgrades.length > 0) &&
          upgrades.map(upgrade => (
            <MenuItem key={upgrade.name} onClick={() => onUpgradeSelect(upgrade)}>
              {upgrade.name}
            </MenuItem>
          ))}
        {selectedUpgrade && (
          <MenuItem onClick={() => onUpgradeSelect(undefined)}>Remove</MenuItem>
        )}
      </Menu>
    </>
  );
};

UpgradeButton.propTypes = {
  type: PropTypes.string.isRequired,
  upgrades: PropTypes.arrayOf(upgradeTemplate).isRequired,
  upgradeFunction: PropTypes.func.isRequired,
  unitKey: PropTypes.number.isRequired,
  upgradeKey: PropTypes.number.isRequired
};

export default UpgradeButton;
