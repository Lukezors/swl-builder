import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Body = styled.div`
  border-style: solid;
  border-width: 1px;
`;

const UnitCard = ({ unit, deleteFunction, index }) => {
  const { name } = unit;
  return (
    <Body
      onClick={e => {
        e.stopPropagation();
        deleteFunction(index);
      }}
    >
      <p>{name}</p>
    </Body>
  );
};

UnitCard.propTypes = {
  unit: PropTypes.object.isRequired,
  deleteFunction: PropTypes.func.isRequired,
  index: PropTypes.string
};

export default UnitCard;
