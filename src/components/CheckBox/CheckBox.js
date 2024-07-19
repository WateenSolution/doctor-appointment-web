import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faSquare } from "@fortawesome/free-regular-svg-icons";

export const CheckBox = ({
  label,
  checked: defaultChecked,
  color,
  onChange,
  mT,
  iconMR,
}) => {
  const [checked, setChecked] = useState(defaultChecked || false);

  const handleCheckboxChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <label style={{ marginTop: mT }}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
        style={{ display: "none" }}
      />
      <FontAwesomeIcon
        icon={checked ? faCheckSquare : faSquare}
        style={{ color: color, marginRight: iconMR || 5 }}
      />
      {label}
    </label>
  );
};
