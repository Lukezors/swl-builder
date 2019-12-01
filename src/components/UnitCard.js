import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import UpgradeButton from "./UpgradeButton";

const Body = styled.div`
  border-style: solid;
  border-width: 1px;
`;

const UpgradeBar = styled.div`
  display: flex;
`;

const RemoveButton = styled.button`
  float: right;
`;

const UnitCard = ({ unit, deleteFunction, index }) => {
  const { name, upgrades_slots } = unit;
  return (
    <Body>
      <p>
        {name}
        <RemoveButton
          onClick={() => {
            deleteFunction(index);
          }}
        >
          X{" "}
        </RemoveButton>
      </p>
      <UpgradeBar>
        {upgrades_slots.map(name => (
          <UpgradeButton type={name} />
        ))}
      </UpgradeBar>
    </Body>
  );
};

UnitCard.propTypes = {
  unit: PropTypes.object.isRequired,
  deleteFunction: PropTypes.func.isRequired,
  index: PropTypes.string
};

export default UnitCard;
