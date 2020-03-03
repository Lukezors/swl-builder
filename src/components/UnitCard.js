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
        {upgrades_slots.map((type, key) => (
          <UpgradeButton
            unitKey={index}
            upgradeKey={key}
            key={key}
            upgradeFunction={updateFunction}
            type={type}
            upgrades={getUpgrades(type)}
          />
        ))}
      </UpgradeBar>
    </Body>
  );
};

UnitCard.propTypes = {
  unit: PropTypes.object.isRequired,
  deleteFunction: PropTypes.func.isRequired,
  updateFunction: PropTypes.func.isRequired,
  index: PropTypes.string.isRequired
};

export default UnitCard;
