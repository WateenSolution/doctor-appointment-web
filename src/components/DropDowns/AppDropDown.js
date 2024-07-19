import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Select } from "antd";
import { downArrowIcon } from "../../utilities";

export const AppDropDown = ({
  label,
  vldName,
  mT,
  placeholder,
  list = [],
  onSelect,
  value,
  labelSize,
  labelWeigh,
  labelColor,
}) => {
  const dropDownStyles = {
    width: "100%",
    marginTop: "5px",
    borderRadius: "5px",
    height: "42px" || "auto",
    backgroundColor: "var(--gr10)",
  };

  return (
    <div
      style={{
        marginTop: mT,
      }}
      className="appInputCon"
    >
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

        <Select
          onChange={(selectedValue) => {
            onSelect(selectedValue);
          }}
          options={list}
          size={"large"}
          placeholder={placeholder}
          value={value}
          style={dropDownStyles}
          bordered={false}
          suffixIcon={
            <img src={downArrowIcon} height={"11px"} width={"18px"} />
          }
          dropdownRender={(menu) => (
            <div style={{ backgroundColor: "var(--gr10)" }}>{menu}</div>
          )}
        />
        {vldName && (
          <ErrorMessage name={vldName} component="div" className="error" />
        )}
      </div>
    </div>
  );
};
