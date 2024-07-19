import { Col, Row } from "antd";
import React from "react";
import { OverviewCard2, SiteDetHierChart, SpecsInfo, WeatherCard } from "..";
import { CommonCard } from "../../components";
import { CustomTextBox } from "../CustomComponents/CustomTextBox";
import {
  siteIcon,
  deviceSolarIcon,
  powerIcon,
  voltageIcon,
  currentIcon,
} from "../../utilities";
import moment from "moment";

export const SiteDetCard1 = ({
  mT,
  tcpr,
  todayRevenue,
  todayYield,
  sysSize,
  perfRatio,
  cuf,
  activeFault,
  noOfInverter,
  stations,
  links,
  setWeatherOpen,
  weatherRecord,
  totalRevenue,
  totalYield,
  co2Reduction,
  treesPlanted,
  siteComissioningDate,
}) => {
  const no_production = todayYield || totalYield;
  const revRender = todayRevenue || totalRevenue;
  const devRender =
    sysSize || noOfInverter || activeFault || siteComissioningDate;
  const greenRender = co2Reduction || treesPlanted;
  return (
    <CommonCard>
      <Row gutter={[16, 16]}>
        {/* Energy Section */}
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          {/* Energy Production section component */}
          {no_production ? (
            <div>
              <div style={{ margin: "13px 0px 5px 0px" }}>
                <CustomTextBox
                  text={"Energy Produced"}
                  textFontColor={"var(--gr1)"}
                  textFontSize={21}
                  textFontWeight={400}
                  textFontFamily={"Lato"}
                  textLineHeight={"25.2px"}
                  textLetterSpacing={0}
                ></CustomTextBox>
              </div>

              <Row gutter={[16, 16]}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <SpecsInfo
                    title={" Today's Yield"}
                    value={todayYield}
                    unit={"kWh"}
                    iconSrc={deviceSolarIcon}
                  />
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <SpecsInfo
                    title={" Total Yield"}
                    value={totalYield}
                    unit={"kWh"}
                    iconSrc={deviceSolarIcon}
                  />
                </Col>
              </Row>
            </div>
          ) : (
            ""
          )}

          {/* Revenue Saving section */}
          {revRender ? (
            <div>
              <div style={{ margin: "13px 0px 5px 0px" }}>
                <CustomTextBox
                  text={"Revenue Saving"}
                  textFontColor={"var(--gr1)"}
                  textFontSize={21}
                  textFontWeight={400}
                  textFontFamily={"Lato"}
                  textLineHeight={"25.2px"}
                  textLetterSpacing={0}
                ></CustomTextBox>
              </div>

              <Row gutter={[16, 16]}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <SpecsInfo
                    title={"Today's Revenue"}
                    value={todayRevenue}
                    unit={"PKR"}
                    iconSrc={deviceSolarIcon}
                  />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <SpecsInfo
                    title={"Total Revenue"}
                    value={totalRevenue}
                    unit={"Rs"}
                    iconSrc={deviceSolarIcon}
                  />
                </Col>
              </Row>
            </div>
          ) : (
            ""
          )}

          {/* Device Monitoring section */}
          {devRender ? (
            <div>
              <div style={{ margin: "13px 0px 5px 0px" }}>
                <CustomTextBox
                  text={"Device Monitoring"}
                  textFontColor={"var(--gr1)"}
                  textFontSize={21}
                  textFontWeight={400}
                  textFontFamily={"Lato"}
                  textLineHeight={"25.2px"}
                  textLetterSpacing={0}
                ></CustomTextBox>
              </div>

              <Row gutter={[16, 16]}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <SpecsInfo
                    title={"System Size"}
                    value={sysSize}
                    unit={"KW"}
                    iconSrc={deviceSolarIcon}
                  />
                  <SpecsInfo
                    title={"No. of Inverters"}
                    value={noOfInverter}
                    iconSrc={siteIcon}
                    mT={20}
                  />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  {activeFault ? (
                    <SpecsInfo
                      title={"Active Fault"}
                      value={activeFault}
                      iconSrc={siteIcon}
                    />
                  ) : (
                    ""
                  )}

                  {siteComissioningDate ? (
                    <SpecsInfo
                      title={"Comissioning Date"}
                      value={
                        siteComissioningDate
                          ? moment(siteComissioningDate).format("DD-MM-YY")
                          : null
                      }
                      iconSrc={deviceSolarIcon}
                      mT={20}
                    />
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </div>
          ) : (
            ""
          )}

          {/* Green Energy section */}
          {greenRender ? (
            <div>
              <div style={{ margin: "13px 0px 5px 0px" }}>
                <CustomTextBox
                  text={"Green Energy"}
                  textFontColor={"var(--gr1)"}
                  textFontSize={21}
                  textFontWeight={400}
                  textFontFamily={"Lato"}
                  textLineHeight={"25.2px"}
                  textLetterSpacing={0}
                ></CustomTextBox>
              </div>

              <Row gutter={[16, 16]}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <SpecsInfo
                    title={"Carbon Reduction"}
                    value={co2Reduction}
                    unit={"Tonnes"}
                    iconSrc={deviceSolarIcon}
                  />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <SpecsInfo
                    title={"Tree Planted"}
                    value={treesPlanted}
                    iconSrc={siteIcon}
                  />
                </Col>
              </Row>
            </div>
          ) : (
            ""
          )}
        </Col>

        {/* HierarchyChart component */}
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div className="aiCenter">
            <SiteDetHierChart data={stations} links={links} />
          </div>
        </Col>
      </Row>
    </CommonCard>
  );
};
