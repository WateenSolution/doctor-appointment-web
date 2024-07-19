import { ErrorMessage, Field } from "formik";
import { Input } from "antd";
import React, { useEffect, useState } from "react";

const { TextArea } = Input;

export const InputBox = ({
  label,
  vldName,
  mT,
  placeholder,
  labelSize,
  labelWeigh,
  labelColor,
}) => {
  const [rows, setRows] = useState(window.innerWidth < 766 ? 3 : 5);

  const handleResize = () => {
    setRows(window.innerWidth < 776 ? 3 : 5);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const inputStyles = {
    border: "none",
    boxShadow: "0 7px 15px var(--gr10)",
    backgroundColor: "var(--gr10)",
  };

  return (
    <div style={{ marginTop: mT }} className="appInputCon">
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
          as={TextArea}
          rows={rows}
          className="form-control mt-1"
          placeholder={placeholder}
          name={vldName}
          style={inputStyles}
        />
        <ErrorMessage name={vldName} component="div" className="error" />
      </div>
    </div>
  );
};
