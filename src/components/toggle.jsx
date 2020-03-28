import React, { useState } from "react";
import PropTypes from "prop-types";

function ToggleButton(props) {
  const { value, setValue } = props;
  return (
    <div className="switch-container">
      <label>
        <input
          checked={value}
          onChange={() => setValue(!value)}
          className="switch"
          type="checkbox"
        />
        <div>
          <div></div>
        </div>
      </label>
    </div>
  );
}

ToggleButton.propTypes = {
  value: PropTypes.bool,
  setValue: PropTypes.func
};
export default ToggleButton;
