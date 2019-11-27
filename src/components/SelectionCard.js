import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Body = styled.div`
  border-style: solid;
  border-width: 1px;
`;

const SelectionCard = ({ unit, addFunction }) => {
  const { name, point_cost } = unit; //todo temporary will need to expand deez props more when the comp grows into something usable
  return (
    <Body
      onClick={e => {
        e.stopPropagation();
        addFunction(unit);
      }}
    >
      <p>{name}</p>
      <p>{point_cost}</p>
    </Body>
  );
};

SelectionCard.propTypes = {
  unit: PropTypes.object.isRequired,
  addFunction: PropTypes.func
};

export default SelectionCard;
