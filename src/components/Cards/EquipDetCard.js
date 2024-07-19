import { Col, Row } from "antd";
import React from "react";
import {
  siteIcon,
  deviceSolarIcon,
  voltageIcon,
  currentIcon,
} from "../../utilities";
import { OverviewInfo } from "./OverviewInfo";
import { HierarchyChart } from "../Charts/HierarchyChart";
import { CommonCard, SpecsInfo } from "../../components";
import { CustomTextBox } from "../CustomComponents/CustomTextBox";

export const EquipDetCard = ({
  mT,
  monthlyConsmp,
  todayConsmp,
  netMetering,
  mdi,
  powerFactor,
  gridFreq,
  avgActPower,
  avgReactPower,
  stations,
  links,
  thd,
  gridDownTime,
  voltA,
  voltB,
  voltC,
  currA,
  currB,
  currC,
}) => {
  const eneRender = todayConsmp || monthlyConsmp;
  const powRender = avgActPower || avgReactPower;
  const devRender =
    netMetering ||
    gridFreq ||
    thd ||
    mdi ||
    powerFactor ||
    gridDownTime != null;
  const volRender = voltA || voltB || voltC;
  const currRender = currA || currC || currB;
  return (
    <CommonCard mT={mT}>
      <Row gutter={[16, 16]}>
        {/* Energy Section */}
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          {eneRender ? (
            <div>
              <div style={{ margin: "13px 0px 5px 0px" }}>
                <CustomTextBox
                  text={"Energy Consumption"}
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
                    title={" Today's Consumption"}
                    value={todayConsmp}
                    unit={"kWh"}
                    iconSrc={deviceSolarIcon}
                  />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <SpecsInfo
                    title={"Monthly Consumption"}
                    value={monthlyConsmp}
                    unit={"kWh"}
                    iconSrc={deviceSolarIcon}
                  />
                </Col>
              </Row>
            </div>
          ) : (
            ""
          )}

          {/* Power Monitoring Section */}
          {powRender && (
            <div style={{ margin: "25px 0px 5px 0px" }}>
              <CustomTextBox
                text={"Power Monitoring"}
                textFontColor={"var(--gr1)"}
                textFontSize={21}
                textFontWeight={400}
                textFontFamily={"Lato"}
                textLineHeight={"25.2px"}
                textLetterSpacing={0}
              ></CustomTextBox>
            </div>
          )}
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              {avgActPower && (
                <SpecsInfo
                  title={"Average Active Power"}
                  value={avgActPower}
                  unit={"kW"}
                  iconSrc={deviceSolarIcon}
                />
              )}
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              {avgReactPower && (
                <SpecsInfo
                  title={"Average Reactive Power"}
                  value={avgReactPower}
                  unit={"kVAr"}
                  iconSrc={deviceSolarIcon}
                />
              )}
            </Col>
          </Row>

          {/* Device Monitoring Section */}
          {devRender ? (
            <div>
              <div style={{ margin: "25px 0px 5px 0px" }}>
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
                  {netMetering ? (
                    <SpecsInfo
                      title={"Net Metering"}
                      value={netMetering}
                      unit={"kWh"}
                      iconSrc={deviceSolarIcon}
                    />
                  ) : (
                    ""
                  )}
                  {gridFreq ? (
                    <SpecsInfo
                      title={"Grid Frequency"}
                      value={gridFreq}
                      unit={"Hz"}
                      iconSrc={deviceSolarIcon}
                      mT={20}
                    />
                  ) : (
                    ""
                  )}

                  {thd ? (
                    <SpecsInfo
                      title={"THD"}
                      value={thd}
                      mT={20}
                      iconSrc={siteIcon}
                    />
                  ) : (
                    ""
                  )}
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  {mdi && (
                    <SpecsInfo
                      title={"MDI"}
                      value={mdi}
                      unit={"kWh"}
                      iconSrc={deviceSolarIcon}
                    />
                  )}
                  {powerFactor ? (
                    <SpecsInfo
                      title={"Power Factor"}
                      value={powerFactor}
                      mT={20}
                      iconSrc={siteIcon}
                    />
                  ) : (
                    ""
                  )}
                  {gridDownTime ? (
                    <SpecsInfo
                      title={"Grid Downtime"}
                      value={gridDownTime}
                      mT={20}
                      iconSrc={siteIcon}
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
          {/* Voltage Section */}
          {volRender && (
            <div style={{ margin: "25px 0px 5px 0px" }}>
              <CustomTextBox
                text={"Voltage Phase"}
                textFontColor={"var(--gr1)"}
                textFontSize={21}
                textFontWeight={400}
                textFontFamily={"Lato"}
                textLineHeight={"25.2px"}
                textLetterSpacing={0}
              ></CustomTextBox>
            </div>
          )}
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              {voltA && (
                <SpecsInfo
                  title={"Voltage - A"}
                  value={voltA}
                  unit={"V"}
                  iconSrc={voltageIcon}
                />
              )}
              {voltC && (
                <SpecsInfo
                  title={"Voltage - C"}
                  value={voltC}
                  unit={"V"}
                  mT={20}
                  iconSrc={voltageIcon}
                />
              )}
            </Col>

            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              {voltB && (
                <SpecsInfo
                  title={"Voltage - B"}
                  value={voltB}
                  unit={"V"}
                  iconSrc={voltageIcon}
                />
              )}
            </Col>
          </Row>

          {/* Current Section */}
          {currRender && (
            <div style={{ margin: "25px 0px 5px 0px" }}>
              <CustomTextBox
                text={"Current Phase"}
                textFontColor={"var(--gr1)"}
                textFontSize={21}
                textFontWeight={400}
                textFontFamily={"Lato"}
                textLineHeight={"25.2px"}
                textLetterSpacing={0}
              ></CustomTextBox>
            </div>
          )}
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              {currA && (
                <SpecsInfo
                  title={"Current - A"}
                  value={currA}
                  unit={"A"}
                  iconSrc={currentIcon}
                />
              )}

              {currC && (
                <SpecsInfo
                  title={"Current - C"}
                  value={currC}
                  mT={20}
                  unit={"A"}
                  iconSrc={currentIcon}
                />
              )}
            </Col>

            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              {currB && (
                <SpecsInfo
                  title={"Current - B"}
                  value={currB}
                  unit={"A"}
                  iconSrc={currentIcon}
                />
              )}
            </Col>
          </Row>
        </Col>

        {/* HierarchyChart component */}
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div className="aiCenter">
            <HierarchyChart data={stations} links={links} />
          </div>
        </Col>
      </Row>
    </CommonCard>
  );
};
