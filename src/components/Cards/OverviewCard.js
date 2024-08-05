import React from "react";
import { useNavigate } from "react-router-dom";
import { CustomTextBox } from "../CustomComponents/CustomTextBox";
import { Col, Row } from "antd";

export const OverviewCard = ({ count }) => {
  const navigate = useNavigate();

  return (
    <div className="ovCardMain">
      <Row gutter={16} align="middle">
        <Col span={24} className="valueBoxCol">
          <div className="valueBox">
            <CustomTextBox
              text={count}
              textFontColor={"#ffffff"}
              textFontSize={20}
              textFontWeight={700}
              textFontFamily={"Lato"}
              textLineHeight={"20px"}
              textLetterSpacing={0.5}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};
