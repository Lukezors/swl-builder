import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import CollapsableHeader from "./CollapsableHeader";
import SelectionCard from "./SelectionCard";

const Body = styled.div`
  border-style: solid;
  border-width: 1px;
  flex-grow: 1;
  border-right: 0;
`;

const Category = ({ title, units, addFunc }) => (
  <CollapsableHeader key={title} title={title}>
    {units.map(subitem => (
      <SelectionCard unit={subitem} key={subitem.name} addFunction={addFunc}/>
    ))}
  </CollapsableHeader>
);

const SelectionPane = ({factionUnits, addFunction}) => {
  return (
    <Body>
      {Object.keys(factionUnits).map(item => (
        <Category title={item} key={item} units={factionUnits[item]} addFunc={addFunction} />
      ))}
    </Body>
  );
};

SelectionPane.propTypes = {
  factionUnits: PropTypes.object,
  addFunction: PropTypes.func
};

export default SelectionPane;
