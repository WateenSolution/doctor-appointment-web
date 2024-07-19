import React from "react";
import { AppButton } from "../Buttons/AppButton";
import { Col, Row } from "antd";
import { CustomTextBox } from "../CustomComponents/CustomTextBox";

export const CommonCard = ({
  mT,
  title,
  children,
  buttonTitle,
  onClick,
  secButtonTitle,
  secOnClick,
  slabs,
  bgColor,
  titleColor,
  titleFontSize,
  titleFontWeight,
  titleFontFamily,
  titleLineHeight,
  titleLetterSpacing,
  setSelectedMarker,
  setSelectedSlab,
  p,
  selectedSlab,
}) => {
  const handleMarkerSelection = (markerName) => {
    setSelectedMarker(markerName);
    setSelectedSlab(markerName);
  };

  return (
    <div
      className="commonCardCon"
      style={{
        backgroundColor: bgColor || "white",
        padding: p || "24px 16px",
        marginTop: mT,
      }}
    >
      <div className="row-between">
        <CustomTextBox
          text={title}
          textFontColor={titleColor}
          textFontSize={titleFontSize}
          textFontWeight={titleFontWeight}
          textFontFamily={titleFontFamily}
          textLineHeight={titleLineHeight}
          textLetterSpacing={titleLetterSpacing}
        ></CustomTextBox>
        {slabs && (
          <Row className="slabs">
            {slabs?.map((item, index) => {
              const handleClick = () => {
                handleMarkerSelection(item?.name.toUpperCase());
              };

              return (
                <Col className="aiRow" key={index.toString()}>
                  <div
                    className={
                      index === 1
                        ? "slab inactive-map"
                        : index === 2
                        ? "slab healthy-map"
                        : "slab active-map"
                    }
                  />
                  <h5
                    className="text"
                    onClick={handleClick}
                    style={{
                      cursor: "pointer",
                      color:
                        selectedSlab === item.name.toUpperCase()
                          ? "blue"
                          : titleColor,
                    }}
                  >
                    {`${item?.name?.toUpperCase()}`} ({item?.count})
                  </h5>
                </Col>
              );
            })}
          </Row>
        )}
      </div>
      {children}

      {(buttonTitle || secButtonTitle) && (
        <div className="buttonCon">
          <Row gutter={[10, 0]}>
            {secButtonTitle && (
              <Col>
                <AppButton
                  buttonTitle={secButtonTitle}
                  onClick={secOnClick}
                  borderRadius={10}
                  backgroundColor={"var(--primary_color)"}
                />
              </Col>
            )}
            {buttonTitle && (
              <Col>
                <AppButton
                  buttonTitle={buttonTitle}
                  onClick={onClick}
                  borderRadius={10}
                  backgroundColor={"var(--primary_color)"}
                />
              </Col>
            )}
          </Row>
        </div>
      )}
    </div>
  );
};
