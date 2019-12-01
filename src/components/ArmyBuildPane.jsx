import React, { useState } from "react";
import styled from "styled-components";

import ArmyList from "./ArmyList";
import SelectionPane from "./SelectionPane";
import UsageBar from "./UsageBar";

import { getFaction, calculateUsage } from "../util/jsonUtils";
import {FACTIONS} from "../util/constants";

const Container = styled.div`
    display: grid;
    grid-template-columns: 33% 66%
    grid-template-rows: 10% 90%;
    height: 70vh;
    margin: 30px
`;

const ArmyBuildPane = () => {
  const [unitList, setUnitList] = useState({});
  const [listIndex, setListIndex] = useState(1);

  const addUnit = unit => {
    setUnitList({
      ...unitList,
      [listIndex]: unit
    });
    setListIndex(listIndex + 1);
  };
  const removeUnit = index => {
    const {[index]: removedValue, ...remaining} = unitList;
    setUnitList(
      remaining
    );
  };
  return (
    <Container>
      <UsageBar usage={calculateUsage(unitList)} />
      <SelectionPane
        addFunction={addUnit}
        factionUnits={getFaction(FACTIONS.REBEL)}
      />
      <ArmyList removeFunction={removeUnit} factionUnits={unitList} />
    </Container>
  );
};

export default ArmyBuildPane;
