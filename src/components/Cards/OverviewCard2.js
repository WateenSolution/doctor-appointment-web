import React from "react";
import { useNavigate } from "react-router-dom";
import { CustomTextBox } from "../CustomComponents/CustomTextBox";
import { Col, Row } from "antd";

export const OverviewCard2 = ({ mT, count }) => {
  const navigate = useNavigate();

  const title = "Booked Appointments";
  const message = "Tap to concern your doctor.";

  return (
    <div className="ovCard2Main">
      <Row gutter={16} align="middle">
        <Col span={12} className="titleCol">
          <div className="titleAndMessage">
            <CustomTextBox
              text={title}
              textFontColor={"white"}
              textFontSize={10}
              textFontWeight={600}
              textFontFamily={"Lato"}
              textLineHeight={"28px"}
              textLetterSpacing={0.5}
              mB={30}
            />
          </div>
        </Col>
        <Col span={12} className="valueBoxCol">
          <div className="valueBox">
            <CustomTextBox
              text={count.toString()}
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
