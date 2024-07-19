import { Col, Row } from "antd";
import React from "react";
import { CommonCard, SiteDetInfo } from "..";
import {
  co2OrangeIcon,
  oilIcon,
  treeIcon,
  powerIcon,
  revenueIcon,
} from "../../utilities";
import { IconButton, useMediaQuery } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
export const SiteDetCard2 = ({
  mT,
  co2Reduction,
  treesPlanted,
  oilSaved,
  totalYield,
  totalRevenue,
  setIsCo2CardOpen,
}) => {
  const handleOpenCo2 = () => {
    setIsCo2CardOpen(true);
  };

  return (
    <CommonCard mT={mT}>
      <Row align={"middle"}>
        <Col xs={24} sm={24} md={8} lg={8} xl={6}>
          <div className="siteDetCardInnerCon">
            <SiteDetInfo
              iconSrc={co2OrangeIcon}
              iconHeight={54}
              iconWidth={54}
              title={"Carbondioxide Reduction"}
              unit={"Tonnes"}
              value={co2Reduction}
              textColor={"var(--b1)"}
            />
          </div>
        </Col>

        <Col xs={24} sm={24} md={8} lg={8} xl={6}>
          <div className="siteDetCardInnerCon">
            <SiteDetInfo
              iconSrc={treeIcon}
              iconHeight={54}
              iconWidth={54}
              title={"Trees Plantation"}
              value={treesPlanted?.toFixed(2)}
              textColor={"var(--b1)"}
            />
          </div>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={6}>
          <div className="siteDetCardInnerCon">
            <SiteDetInfo
              iconSrc={powerIcon}
              iconHeight={54}
              iconWidth={54}
              title={"Total Yield(kWh)"}
              value={totalYield}
              textColor={"var(--b1)"}
            />
          </div>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={6}>
          <div className="siteDetCardInnerCon">
            <SiteDetInfo
              iconSrc={revenueIcon}
              iconHeight={54}
              iconWidth={54}
              title={"Total Revenue (Rs.)"}
              value={totalRevenue}
              textColor={"var(--b1)"}
            />
          </div>
        </Col>
      </Row>
    </CommonCard>
  );
};
