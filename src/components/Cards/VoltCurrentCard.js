import React from "react";
import { Col, Row } from "antd";
import { CommonCard, SpecsInfo } from "../../components";
import {
  currentIcon,
  deviceSolarIcon,
  technicalSpecs,
  voltageIcon,
} from "../../utilities";

export const VoltCurrentCard = ({
  mT,
  gridDownTime,
  thd,
  voltA,
  currA,
  voltB,
  currB,
  voltC,
  currC,
}) => {
  return (
    <CommonCard mT={mT}>
      <Row gutter={[50, 50]}>
        <Col xs={24} sm={24} md={6} lg={6} xl={6}>
          <SpecsInfo
            title={"Voltage - A"}
            value={voltA}
            unit={"V"}
            iconSrc={voltageIcon}
          />
          <SpecsInfo
            title={"Current - A"}
            value={currA}
            mT={20}
            unit={"A"}
            iconSrc={currentIcon}
          />
        </Col>
        <Col xs={24} sm={24} md={6} lg={6} xl={6}>
          <SpecsInfo
            title={"Voltage - B"}
            value={voltB}
            unit={"V"}
            iconSrc={voltageIcon}
          />
          <SpecsInfo
            title={"Current - B"}
            value={currB}
            mT={20}
            unit={"A"}
            iconSrc={currentIcon}
          />
        </Col>
        <Col xs={24} sm={24} md={6} lg={6} xl={6}>
          <SpecsInfo
            title={"Voltage - C"}
            value={voltC}
            unit={"V"}
            iconSrc={voltageIcon}
          />
          <SpecsInfo
            title={"Current - C"}
            value={currC}
            mT={20}
            unit={"A"}
            iconSrc={currentIcon}
          />
        </Col>
        <Col xs={24} sm={24} md={6} lg={6} xl={6}>
          <SpecsInfo title={"THD"} value={thd} iconSrc={deviceSolarIcon} />
          <SpecsInfo
            title={"Grid Downtime"}
            value={gridDownTime}
            mT={20}
            iconSrc={deviceSolarIcon}
          />
        </Col>
      </Row>
    </CommonCard>
  );
};
