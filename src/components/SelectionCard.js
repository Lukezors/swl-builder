import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Body = styled.div`
  border-style: solid;
  border-width: 1px;
`;

const SelectionCard = ({ unit }) => {
  const { name, cost } = unit; //todo temporary will need to expand deez props more when the comp grows into something usable
  return (
    <Body>
      <p>{name}</p>
      <p>{cost}</p>
    </Body>
  );
};

SelectionCard.propTypes = {
  unit: PropTypes.object.isRequired
};

export default SelectionCard;
