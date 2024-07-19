import { ErrorMessage, Field } from "formik";
import React from "react";

export const AppInput = ({
  label,
  vldName,
  mT,
  placeholder,
  fieldType,
  height,
  disabled,
  labelSize,
  labelWeigh,
  labelColor,
}) => {
  const inputStyles = {
    border: "none",
    height: "42px" || "auto",
    backgroundColor: disabled ? "white" : "white",
    color: disabled ? "#9e9e9e" : "black",
    cursor: disabled ? "not-allowed" : "auto",
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

        <Field
          type={fieldType || "text"}
          className="form-control mt-1"
          placeholder={placeholder}
          name={vldName}
          style={inputStyles}
          disabled={disabled}
        />
        <ErrorMessage name={vldName} component="div" className="error" />
      </div>
    </div>
  );
};
