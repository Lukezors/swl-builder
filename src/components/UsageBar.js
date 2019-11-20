import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import UsageBarItem from "./UsageBarItem";
import { RANKS } from "../util/constants";

const UsageBarBody = styled.div`
  grid-column: 1 / span 2;
  border-style: solid;
  border-width: 1px;
  border-bottom: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const UsageBar = ({
  points,
  slots
}) => (
  <UsageBarBody>
    <UsageBarItem name={"Points"} currentValue={points} maxValue={800} />
    {/*TODO: Points may need diff styling/ comp*/}
    <UsageBarItem
      name={RANKS.COMMANDER}
      currentValue={slots[RANKS.COMMANDER]}
      maxValue={2}
    />
    <UsageBarItem
      name={RANKS.OPERATIVE}
      currentValue={slots[RANKS.OPERATIVE]}
      maxValue={2}
    />
    <UsageBarItem
      name={RANKS.SPECIAL_FORCES}
      currentValue={slots[RANKS.SPECIAL_FORCES]}
      maxValue={3}
    />
    <UsageBarItem
      name={RANKS.CORPS}
      currentValue={slots[RANKS.CORPS]}
      maxValue={6}
    />
    <UsageBarItem
      name={RANKS.SUPPORT}
      currentValue={slots[RANKS.SUPPORT]}
      maxValue={3}
    />
    <UsageBarItem 
        name={RANKS.HEAVY} 
        currentValue={slots[RANKS.HEAVY]} 
        maxValue={2} 
    />
  </UsageBarBody>
);

UsageBar.propTypes = {
  points: PropTypes.number.isRequired,
  slots: PropTypes.shape({
    [RANKS.COMMANDER]: PropTypes.number.isRequired,
    [RANKS.OPERATIVE]: PropTypes.number.isRequired,
    [RANKS.SPECIAL_FORCES]: PropTypes.number.isRequired,
    [RANKS.CORPS]: PropTypes.number.isRequired,
    [RANKS.SUPPORT]: PropTypes.number.isRequired,
    [RANKS.HEAVY]: PropTypes.number.isRequired
  })
};

UsageBar.defaultProps = {
  points: 0,
  slots: {
    [RANKS.COMMANDER]: 0,
    [RANKS.OPERATIVE]: 0,
    [RANKS.SPECIAL_FORCES]: 0,
    [RANKS.CORPS]: 0,
    [RANKS.SUPPORT]: 0,
    [RANKS.HEAVY]: 0
  }
};

export default UsageBar;
