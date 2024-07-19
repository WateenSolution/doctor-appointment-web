import { PlusOutlined } from "@ant-design/icons";
import { Button, Input, Select } from "antd";
import { ErrorMessage } from "formik";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import { addOrgAction } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { downArrowIcon } from "../../utilities";

const { Option } = Select;

export const CreatableDropDown = ({
  label,
  vldName,
  mT,
  placeholder,
  list = [],
  onSelect,
  onInput,
  value,
  disabled,
  alphaNumCheck,
  labelSize,
  labelWeigh,
  labelColor,
}) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch(null);
  const alphanumericRegex = /^[a-zA-Z0-9\s]*$/;

  const dropDownStyles = {
    backgroundColor: "var(--gr10)",
    width: "100%",
    marginTop: "5px",
    borderRadius: "5px",
  };

  const handleBlur = (e) => {
    const inputValue = e.target.value;
    if (onInput) {
      onInput(inputValue);
    }
  };

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const onAddClient = () => {
    if (navigator.onLine) {
      const requestBody = {
        input,
      };
      const body = {
        values: requestBody,
        onSuccess: async (res) => {
          if (res) {
          }
        },
        onFailure: (error) => {},
      };

      dispatch(addOrgAction(body));
    } else {
      toast.error("Error Adding Client");
    }
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
          disabled={disabled}
          showSearch
          allowClear
          onChange={onSelect}
          onBlur={handleBlur}
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          suffixIcon={
            <img src={downArrowIcon} height={"11px"} width={"18px"} />
          }
          clearIcon={
            <IconButton
              style={{
                ...clearIconStyles,
              }}
            >
              <CloseIcon
                style={{
                  color: "#fff",
                  fontSize: 10,
                }}
              />
            </IconButton>
          }
          size="large"
          placeholder={placeholder}
          value={value}
          style={dropDownStyles}
          bordered={false}
          dropdownRender={(menu) => (
            <div style={{ backgroundColor: "var(--gr10)" }}>
              {menu}
              <div
                style={{
                  padding: "8px 8px 4px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Input
                  placeholder="Please enter item"
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  style={{ flex: 1, marginRight: 8 }}
                />
                <Button
                  type="text"
                  icon={<PlusOutlined />}
                  onClick={onAddClient}
                />
              </div>
            </div>
          )}
        >
          {list.map((item, index) => (
            <Option key={index?.toString()} value={item}>
              {item}
            </Option>
          ))}
        </Select>

        <ErrorMessage name={vldName} component="div" className="error" />
      </div>
    </div>
  );
};

const clearIconStyles = {
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: "var(--theme_color)",
  padding: 3,
};
