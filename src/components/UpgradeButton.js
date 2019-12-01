import React from "react";
import PropTypes from "prop-types";

const UpgradeButton = ({ type }) => {
  return (
    <button
      onClick={e => {
        // e.preventDefault();
        e.stopPropagation();
        alert(`todo: Add a ${type} upgrade`);
      }}
    >
      {type}
    </button>
  );
};

UpgradeButton.propTypes = {
  type: PropTypes.string
};

export default UpgradeButton;
