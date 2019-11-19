import React from "react";
import styled from "styled-components";

import CollapsableHeader from "./CollapsableHeader";
import SelectionCard from "./SelectionCard";

import { getFaction } from "util/jsonUtils";

const Body = styled.div`
  border-style: solid;
  border-width: 1px;
  flex-grow: 1;
  border-right: 0;
`;

const Category = ({ title, units }) => (
  <CollapsableHeader key={title} title={title}>
    {units.map(subitem => {
      return <SelectionCard unit={subitem} key={subitem.name} />;
    {units.map(subitem => <SelectionCard unit={subitem} key={subitem.name} /> )}
  </CollapsableHeader>
);

const SelectionPane = () => {
  const curData = getFaction("rebel");
  return (
    <Body>
      {Object.keys(curData).map(item => (
        <Category title={item} key={item} units={curData[item]} />
      ))}
    </Body>
  );
};

export default SelectionPane;
