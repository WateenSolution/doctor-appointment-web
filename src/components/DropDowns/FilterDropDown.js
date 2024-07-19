import { Select } from "antd";
import { ErrorMessage } from "formik";
import React from "react";
import { downArrowIcon } from "../../utilities";

const { Option } = Select;

export const FilterDropDown = ({
  label,
  vldName,
  mT,
  placeholder,
  list = [],
  onSelect,
  onInput,
  value,
  labelSize,
  labelWeigh,
  labelColor,
}) => {
  const dropDownStyles = {
    width: "100%",
    marginTop: "5px",
    borderRadius: "5px",
    backgroundColor: "var(--gr10)",
  };

  const handleBlur = (e) => {
    const inputValue = e.target.value;
    if (onInput) {
      onInput(inputValue);
    }
  };

  return (
    <div
      style={{
        marginTop: mT,
      }}
      className="appInputCon"
    >
      <style>
        {`
          .custom-select .ant-select-selection-placeholder {
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

        <Select
          showSearch
          onChange={onSelect}
          onBlur={handleBlur}
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          size="large"
          placeholder={placeholder}
          value={value}
          style={dropDownStyles}
          className="custom-select"
          bordered={false}
          suffixIcon={
            <img src={downArrowIcon} height={"11px"} width={"18px"} />
          }
          dropdownRender={(menu) => (
            <div style={{ backgroundColor: "var(--gr10)" }}>{menu}</div>
          )}
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
    </div>
  );
};
