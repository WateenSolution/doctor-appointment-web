import { Col, Row } from "antd";
import React from "react";
import { siteIcon } from "../../utilities";
import { CustomTextBox } from "../CustomComponents/CustomTextBox";
export const SpecsInfo = ({
  mT,
  title,
  value,
  unit,
  unitLeft,
  onClick,
  iconSrc,
  color,
}) => {
  return (
    <Row
      style={{
        marginTop: mT,
        cursor: onClick ? "pointer" : "default",
        //height: "48px",
      }}
      className="AlarmCardCon"
      align="left"
      gutter={[5, 5]}
      onClick={onClick}
    >
      <Col xs={24} sm={24} md={24} lg={24} xl={3}>
        <div className="leftCon">
          <img
            className=""
            height={20}
            width={20}
            src={iconSrc ? iconSrc : siteIcon}
          />
        </div>
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={15}>
        <div className="centerCon">
          {/* <h6 style={{ color: color }}>{title}</h6> */}
          <CustomTextBox
            text={title}
            textFontColor={color}
            textFontSize={14}
            textFontWeight={400}
            textFontFamily={"Lato"}
            textLineHeight={"16.8px"}
            textLetterSpacing={0.15}
          ></CustomTextBox>
        </div>
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={6}>
        <div className="rightCon">
          {unitLeft && value !== null && value !== undefined && (
            <CustomTextBox
              text={unitLeft || "0"}
              textFontColor={color}
              textFontSize={18}
              textFontWeight={400}
              textFontFamily={"Lato"}
              textLineHeight={"21.6px"}
              textLetterSpacing={0.15}
            ></CustomTextBox>
          )}
          {/* <span className="h4" style={{ color: color }}>
            {value && value !== undefined && value !== null ? value : "--"}
          </span> */}
          <CustomTextBox
            text={value ?? "--"}
            textFontColor={color}
            textFontSize={18}
            textFontWeight={400}
            textFontFamily={"Lato"}
            textLineHeight={"21.6px"}
            textLetterSpacing={0.15}
          ></CustomTextBox>
          {unit && value !== null && value !== undefined && (
            // <span className="h4" style={{ color: color }}>
            //   {unit}
            // </span>
            <CustomTextBox
              text={unit || ""}
              textFontColor={color}
              textFontSize={10}
              textFontWeight={400}
              textFontFamily={"Lato"}
              textLineHeight={"21.6px"}
              textLetterSpacing={0.15}
              mL={3}
            ></CustomTextBox>
          )}
        </div>
      </Col>
    </Row>
  );
};
