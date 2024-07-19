import React from "react";
import { Col, Row } from "antd";
import { bellIcon } from "../../utilities";
import { CustomTextBox } from "../CustomComponents/CustomTextBox";
export const AlarmCard = ({
  mT,
  title,
  value,
  iconSrc,
  borderColor,
  onClick,
  color,
}) => {
  return (
    <Row
      style={{
        marginTop: mT,
        cursor: onClick ? "pointer" : "default",
      }}
      className="AlarmCardCon"
      align={"left"}
      gutter={[5, 5]}
      onClick={onClick}
    >
      <Col xs={24} sm={3} md={3} lg={3} xl={3}>
        <div className="leftCon">
          <img className="" height={20} width={20} src={iconSrc || bellIcon} />
        </div>
      </Col>
      <Col xs={24} sm={15} md={15} lg={15} xl={15}>
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
      <Col xs={24} sm={6} md={6} lg={6} xl={6}>
        <div className="rightCon">
          {/* <h4 style={{ color: color }}>{value || "0"}</h4> */}
          <CustomTextBox
            text={value ?? "--"}
            textFontColor={color}
            textFontSize={18}
            textFontWeight={400}
            textFontFamily={"Lato"}
            textLineHeight={"21.6px"}
            textLetterSpacing={0.15}
          ></CustomTextBox>
        </div>
      </Col>
    </Row>
  );
};
