import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export const DropDownMain = ({
  optionSelectData,
  onChangeOptionSelect,
  selectValue,
  outlineColor,
  dropDColor,
}) => {
  return (
    <div className="select-container">
      <select
        className="select"
        value={selectValue}
        onChange={(event) => {
          onChangeOptionSelect(event.target.value);
        }}
        style={{
          outlineColor: outlineColor || "var(--color-wateen)",
          backgroundColor: dropDColor || "var(--g3)",
        }}
      >
        {optionSelectData?.map((item, index) => (
          <option key={index.toString()} value={item}>
            {item}
          </option>
        ))}
      </select>

      <div className="icon-container">
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
    </div>
  );
};
