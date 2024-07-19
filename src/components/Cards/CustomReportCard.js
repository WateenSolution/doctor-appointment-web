import React, { useState } from "react";
import {
  CheckBox,
  CommonCard,
  DropDownCard,
  DropDownMain,
  SwitchTab,
} from "../../components";
import SwitchSelector from "react-switch-selector";
import { Col, Row } from "antd";
import { customReportImage, tabs } from "../../utilities";
import CalendarComponent from "../CustomComponents/CalendarComponent";

export const CustomReportCard = ({ mT }) => {
  return (
    <CommonCard
      mT={mT}
      title={"Generate Report (Custom - Template)"}
      buttonTitle={"Generate"}
    >
      <div className="customRepCardTopCon">
        <SwitchTab tabs={tabs} />
      </div>

      <Row className="customRepCardBottomCon" gutter={[0, 50]}>
        <Col className="imgCon" xs={24} sm={24} md={16} lg={16} xl={16}>
          <img
            className="preReportImg"
            height={559}
            width={559}
            src={customReportImage}
          />
        </Col>

        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <DropDownCard title={"Report Name"} />
          <DropDownCard title={"From"} mT={40} />
          <DropDownCard title={"Site"} mT={40} />
          <DropDownCard title={"To"} mT={40} />
          <DropDownCard title={"Polling Rate"} mT={40} />
        </Col>
      </Row>
      <CheckBox label={"Save Preferences"} color={"#5072A7"} mT={50} />
    </CommonCard>
  );
};
