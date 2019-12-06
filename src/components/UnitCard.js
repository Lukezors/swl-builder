import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import UpgradeButton from "./UpgradeButton";

import ClearIcon from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";
import { getUpgrades } from "../util/jsonUtils";

const Body = styled.div`
  border-style: solid;
  border-width: 1px;
`;

const UpgradeBar = styled.div`
  display: flex;
`;

const RemoveButton = styled.div`
  float: right;
`;

const UnitCard = ({ unit, deleteFunction, index, updateFunction }) => {
  const { name, upgrades_slots } = unit;
  return (
    <Body>
      <p>
        {name}
        <RemoveButton>
          <IconButton
            onClick={() => {
              deleteFunction(index);
            }}
          >
            <ClearIcon />
          </IconButton>
        </RemoveButton>
      </p>
      <UpgradeBar>
        {upgrades_slots.map(name => (
          <UpgradeButton unitKey={index} upgradeFunction={updateFunction} type={name} upgrades={getUpgrades(name)} />
        ))}
      </UpgradeBar>
    </Body>
  );
};

UnitCard.propTypes = {
  unit: PropTypes.object.isRequired,
  deleteFunction: PropTypes.func.isRequired,
  updateFunction: PropTypes.func,
  index: PropTypes.string
};

export default UnitCard;
