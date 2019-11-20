import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import UsageBarItem from "./UsageBarItem";
import {
  RANK_COMMANDER,
  RANK_OPERATIVE,
  RANK_CORPS,
  RANK_SPECIAL_FORCES,
  RANK_HEAVY,
  RANK_SUPPORT
} from "../util/constants";

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
  commanderSlots,
  operativeSlots,
  corpsSlots,
  specialForcesSlots,
  supportSlots,
  heavySlots
}) => (
  <UsageBarBody>
    <UsageBarItem name={"Points"} currentValue={points} maxValue={800} />{" "}
    {/*TODO: Points may need diff styling/ comp*/}
    <UsageBarItem
      name={RANK_COMMANDER}
      currentValue={commanderSlots}
      maxValue={2}
    />
    <UsageBarItem
      name={RANK_OPERATIVE}
      currentValue={operativeSlots}
      maxValue={2}
    />
    <UsageBarItem
      name={RANK_SPECIAL_FORCES}
      currentValue={corpsSlots}
      maxValue={3}
    />
    <UsageBarItem
      name={RANK_CORPS}
      currentValue={specialForcesSlots}
      maxValue={6}
    />
    <UsageBarItem
      name={RANK_SUPPORT}
      currentValue={supportSlots}
      maxValue={3}
    />
    <UsageBarItem
        name={RANK_HEAVY}
        currentValue={heavySlots}
        maxValue={2}
    />
  </UsageBarBody>
);

UsageBar.propTypes = {
  points: PropTypes.number.isRequired,
  commanderSlots: PropTypes.number.isRequired,
  operativeSlots: PropTypes.number.isRequired,
  corpsSlots: PropTypes.number.isRequired,
  specialForcesSlots: PropTypes.number.isRequired,
  supportSlots: PropTypes.number.isRequired,
  heavySlots: PropTypes.number.isRequired
};

UsageBar.defaultProps = {
  points: 0,
  commanderSlots: 0,
  operativeSlots: 0,
  corpsSlots: 0,
  specialForcesSlots: 0,
  supportSlots: 0,
  heavySlots: 0
};

export default UsageBar;
