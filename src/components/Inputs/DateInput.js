import { DatePicker } from "antd";
import { ErrorMessage } from "formik";
import React from "react";
import { calendarIcon } from "../../utilities";

export const DateInput = ({
  label,
  value,
  defaultValue,
  vldName,
  mT,
  placeholder,
  onSelect,
  labelSize,
  labelWeigh,
  labelColor,
}) => {
  const dateInputStyles = {
    width: "100%",
    marginTop: "5px",
    borderRadius: "5px",
    borderColor: "transparent",
    height: "42px" || "auto",
    backgroundColor: "var(--gr10)",
  };

  return (
    <div className="appInputCon">
      <style>
        {`
          .custom-date-picker .ant-picker-input input::placeholder {
            color: black;
          }
          .custom-date-picker .ant-picker-suffix {
            color: black;
          }
        `}
      </style>
      <div className={`form-group mt-1`}>
        <label
          className="labelText"
          style={{
            fontSize: labelSize,
            fontWeight: labelWeigh,
            color: labelColor,
          }}
        >
          {label}
        </label>
        <DatePicker
          onChange={(date, dateString) => {
            onSelect(date);
          }}
          style={dateInputStyles}
          size={"large"}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          suffixIcon={<img src={calendarIcon} height={"20px"} width={"20px"} />}
          className="custom-date-picker"
        />
        {vldName && (
          <ErrorMessage name={vldName} component="div" className="error" />
        )}
      </div>
    </div>
  );
};
