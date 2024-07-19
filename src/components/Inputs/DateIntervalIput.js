import { DatePicker } from "antd";
import { ErrorMessage } from "formik";
import React from "react";

export const DateIntervalInput = ({
  label,
  value,
  defaultValue,
  vldName,
  mT,
  placeholder,
  onSelect,
}) => {
  const { RangePicker } = DatePicker;

  const dateInputStyles = {
    boxShadow: "0 7px 15px var(--gr10)",
    width: "100%",
    marginTop: "5px",
    borderRadius: "5px",
    borderColor: "transparent",
    height: "42px" || "auto",
  };
  return (
    <div className="appInputCon">
      <div className={`form-group  mt-1`}>
        <label className="labelText">{label}</label>
        <RangePicker
          onChange={(dates, dateStrings) => {
            onSelect(dateStrings);
          }}
          style={dateInputStyles}
          size={"large"}
          value={value}
          defaultValue={defaultValue}
          // bordered={false}
        />
        <ErrorMessage name={vldName} component="div" className="error" />
      </div>
    </div>
  );
};
