import React, { useState } from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const UpgradeButton = ({ type, upgrades, upgradeFunction, unitKey }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedUpgrade, setSelectedUpgrade] = useState(undefined);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = upgrade => {
    setSelectedUpgrade(upgrade);
    upgradeFunction(unitKey, upgrade);
    setAnchorEl(null);
  };

  return (
    <>
      <Button variant="contained" onClick={handleClick}>
        {selectedUpgrade ? selectedUpgrade.name : type}
      </Button>
      <Menu
        id="upgrade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => handleClose(selectedUpgrade)}
      >
        {upgrades &&
          upgrades.length > 0 &&
          upgrades.map(upgrade => (
            <MenuItem onClick={() => handleClose(upgrade)}>
              {upgrade.name}
            </MenuItem>
          ))}
        {selectedUpgrade && (
          <MenuItem onClick={() => handleClose(undefined)}>Remove</MenuItem>
        )}
      </Menu>
    </>
  );
};

UpgradeButton.propTypes = {
  type: PropTypes.string,
  upgrades: PropTypes.array,
  upgradeFunction: PropTypes.func,
  unitKey: PropTypes.number
};

export default UpgradeButton;
