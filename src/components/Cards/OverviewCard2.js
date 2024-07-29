import React from "react";
import { useNavigate } from "react-router-dom";
import { CustomTextBox } from "../CustomComponents/CustomTextBox";
import { Col, Row } from "antd";

export const OverviewCard2 = ({ mT, count }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/appointment-form");
  };

  const title = "Total Booked Appointments";
  const message = "Tap to concern your doctor.";

  return (
    <div
      className="ovCard2Main"
      style={{ marginTop: mT }}
      onClick={handleClick}
    >
      <Row gutter={16} align="middle">
        <Col span={12} className="titleCol">
          <div className="titleAndMessage">
            <CustomTextBox
              text={title}
              textFontColor={"white"}
              textFontSize={22}
              textFontWeight={700}
              textFontFamily={"Lato"}
              textLineHeight={"28px"}
              textLetterSpacing={0.5}
              mB={30}
            />
            <CustomTextBox
              text={message}
              textFontColor={"#ffffff"}
              textFontSize={18}
              textFontWeight={400}
              textFontFamily={"Lato"}
              textLineHeight={"26px"}
              textLetterSpacing={0.5}
              textAlign={"center"}
            />
          </div>
        </Col>
        <Col span={12} className="valueBoxCol">
          <div className="valueBox">
            <CustomTextBox
              text={count.toString()}
              textFontColor={"#ffffff"}
              textFontSize={36}
              textFontWeight={700}
              textFontFamily={"Lato"}
              textLineHeight={"44px"}
              textLetterSpacing={0.5}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};
