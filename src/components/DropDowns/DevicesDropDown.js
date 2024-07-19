import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Select } from "antd";
import { downArrowIcon } from "../../utilities";
import { DownloadOutlined } from "@mui/icons-material";

const { Option } = Select;

export const DevicesDropDown = ({
  label,
  vldName,
  mT,
  placeholder,
  list = [],
  onSelect,
  value,
  showSearch,
  borderColor,
}) => {
  const dropDownStyles = {
    borderRadius: "8px",
    // border: `1px solid ${borderColor}`,
    width: "100%",
    backgroundColor: "#F0F0F0",
    //height: "48px",
  };

  const placeholderStyle = {
    color: "var(--neutral_grey)",
    fontFamily: "Lato",
    // display: "flex",
    // alignItems: "center",
    // marginTop: "8px",
  };

  return (
    <div className={`form-group mt-1`}>
      <label className="labelText">{label}</label>

      <Select
        size="large"
        showSearch={showSearch}
        onChange={onSelect}
        value={value}
        style={dropDownStyles}
        bordered={false}
        placeholder={<span style={placeholderStyle}>{placeholder}</span>}
        suffixIcon={<img src={downArrowIcon} height={"8px"} width={"15px"} />}
      >
        {list.map((item) => (
          <Option key={item} value={item}>
            {item}
          </Option>
        ))}
      </Select>
      {vldName && (
        <ErrorMessage name={vldName} component="div" className="error" />
      )}
    </div>
  );
};
