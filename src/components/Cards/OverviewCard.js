import React from "react";
import { Col, Row } from "antd";
import { OverviewInfo } from "./OverviewInfo";
import { bellIcon, co2Icon, generationIcon, solarIcon } from "../../utilities";

export const OverviewCard = ({
  tGeneration,
  tInstalledPlant,
  carbonSaving,
  activeAlarm,
}) => {
  return (
    <Row className="cardContainer">
      <Col className="leftCon" span={12}>
        <OverviewInfo
          iconSrc={generationIcon}
          iconHeight={22}
          iconWidth={18}
          title={"Total Generation"}
          unit={"(kWh)"}
          value={tGeneration}
          textColor={"var(--w1)"}
        />
        <OverviewInfo
          iconSrc={solarIcon}
          iconHeight={22}
          iconWidth={18}
          title={"Total Installed Generation Capacity"}
          unit={"(kW)"}
          value={tInstalledPlant}
          textColor={"var(--w1)"}
        />
        <OverviewInfo
          iconSrc={co2Icon}
          iconHeight={22}
          iconWidth={18}
          title={"Carbon Savings"}
          unit={"(kg)"}
          value={carbonSaving}
          textColor={"var(--w1)"}
        />
      </Col>
      <Col span={12} className="rightCon">
        <OverviewInfo
          mT={40}
          iconSrc={bellIcon}
          iconHeight={22}
          iconWidth={18}
          title={"Active Alarms"}
          value={activeAlarm}
          textColor={"var(--w1)"}
        />
      </Col>
    </Row>
  );
};
