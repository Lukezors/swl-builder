import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const UsageBarItemBody = styled.div`
`;

const UsageBarItem = ({ name, iconUrl, maxValue, currentValue }) => (
  <UsageBarItemBody>
    {name}: {currentValue} / {maxValue}
  </UsageBarItemBody>
);

UsageBarItem.propTypes = {
  name: PropTypes.string.isRequired,
  iconUrl: PropTypes.string,
  maxValue: PropTypes.number.isRequired,
  currentValue: PropTypes.number.isRequired
};

UsageBarItem.defaultProps = {
  maxValue: 0,
  currentValue: 2
};

export default UsageBarItem;
