import React, { useState } from "react";
import { ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faSquare,
  faCircle,
} from "@fortawesome/free-regular-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export const RadioButtonComponent = ({ onSelect, selectedValue, vldName }) => {
  const handleRadioChange = (event) => {
    const newValue = event.target.value;
    if (onSelect) {
      onSelect(newValue);
    }
  };

  return (
    <div style={{ marginLeft: 20, marginTop: 20 }}>
      <label>
        <input
          type="radio"
          value="pdf"
          checked={selectedValue === "pdf"}
          onChange={handleRadioChange}
          style={{ display: "none" }}
        />

        <FontAwesomeIcon
          icon={selectedValue === "pdf" ? faCheckCircle : faCircle}
          style={{ color: "#5072A7" }}
        />
        <span style={{ marginLeft: 5 }}>PDF</span>
      </label>
      <label style={{ marginLeft: 10 }}>
        <input
          type="radio"
          value="csv"
          checked={selectedValue === "csv"}
          onChange={handleRadioChange}
          style={{ display: "none" }}
        />
        <FontAwesomeIcon
          icon={selectedValue === "csv" ? faCheckCircle : faCircle}
          style={{ color: "#5072A7" }}
        />
        <span style={{ marginLeft: 5 }}>CSV</span>
      </label>

      <ErrorMessage name={vldName} component="div" className="error" />
    </div>
  );
};
