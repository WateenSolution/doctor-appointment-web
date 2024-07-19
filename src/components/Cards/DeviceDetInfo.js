import { Col, Row } from "antd";
import React from "react";
import { siteIcon } from "../../utilities";
import { CustomTextBox } from "../CustomComponents/CustomTextBox";

export const DeviceDetInfo = ({ mT, title, value, color, wrapText }) => {
  return (
    <>
      {/* Title Row */}
      <Row
        style={{
          marginTop: mT,
        }}
        className="TitleRow"
        align="left"
        gutter={[5, 5]}
      >
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div className="centerCon">
            <CustomTextBox
              text={title}
              textFontColor={"var(--gr1)"}
              textFontSize={14}
              textFontWeight={700}
              textFontFamily={"Lato"}
              textLineHeight={"16.8px"}
              textLetterSpacing={0.15}
            ></CustomTextBox>
          </div>
        </Col>
      </Row>

      {/* Value Row */}
      <Row
        style={{
          marginTop: mT,
          overflow: wrapText ? "visible" : "hidden",
          whiteSpace: wrapText ? "normal" : "nowrap",
        }}
        className="AlarmCardCon"
        align="left"
        gutter={[5, 5]}
      >
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div className="leftCon">
            <CustomTextBox
              text={value ?? "--"}
              textFontColor={color}
              textFontSize={18}
              textFontWeight={400}
              textFontFamily={"Lato"}
              textLineHeight={wrapText ? "auto" : "21.6px"}
              textLetterSpacing={0.15}
            ></CustomTextBox>
          </div>
        </Col>
      </Row>
    </>
  );
};
