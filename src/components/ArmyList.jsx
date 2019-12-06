import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import UnitCard from "./UnitCard";

const Body = styled.div`
  border-style: solid;
  border-width: 1px;
  flex-grow: 3;
`;

const ArmyList = ({factionUnits, removeFunction, updateFunction}) => <Body>
    {Object.keys(factionUnits).map(key => (
        <UnitCard updateFunction={updateFunction} unit={factionUnits[key]} key={key} deleteFunction={removeFunction} index={key}/>
    ))}

</Body>;


ArmyList.propTypes = {
    factionUnits: PropTypes.object,
    removeFunction: PropTypes.func,
    updateFunction: PropTypes.func
};

export default ArmyList;
