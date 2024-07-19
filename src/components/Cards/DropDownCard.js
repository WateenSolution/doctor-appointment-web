import React from "react";
import { DropDownMain } from "../DropDowns/DropDownMain";

export const DropDownCard = ({
  title,
  bgColor,
  selectValue,
  options,
  onChangeOptionSelect,
  mT,
  dropDColor,
}) => {
  return (
    <div
      className="dropDownCardCon"
      style={{
        backgroundColor: bgColor || "var(--w1)",
        borderRadius: bgColor && 10,
        boxShadow: bgColor && "0 2px 4px rgba(0, 0, 0, 0.1)",
        padding: bgColor && 20,
        marginTop: mT,
      }}
    >
      {title ? <text className="dropCardText">{title}</text> : null}

      <DropDownMain
        selectValue={selectValue}
        optionSelectData={options}
        onChangeOptionSelect={(event) => onChangeOptionSelect(event)}
        dropDColor={dropDColor}
      />
    </div>
  );
};
