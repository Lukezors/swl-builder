import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";

const Body = styled.div`
  border-style: solid;
  border-width: 1px;
`;

const AddButton = styled.div`
  float: right;
`;

const SelectionCard = ({ unit, addFunction }) => {
  const { name, point_cost } = unit;
  return (
    <Body>
      <p>
        {name}
        <AddButton>
          <IconButton
            onClick={e => {
              e.stopPropagation();
              addFunction(unit);
            }}
          >
            <AddIcon />
          </IconButton>
        </AddButton>
      </p>
      <p>{point_cost}</p>
    </Body>
  );
};

SelectionCard.propTypes = {
  unit: PropTypes.object.isRequired,
  addFunction: PropTypes.func
};

export default SelectionCard;
