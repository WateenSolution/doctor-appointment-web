import React from "react";
import { AppButton } from "../Buttons/AppButton";
import { Col, Row } from "antd";
import { CustomTextBox } from "../CustomComponents/CustomTextBox";

export const OverviewCommonCard = ({
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
  mR,
}) => {
  return (
    <div
      className="overviewCommonCardCon"
      style={{
        backgroundColor: bgColor || "white",
      }}
    >
      <CustomTextBox
        text={title}
        textFontColor={titleColor}
        textFontSize={titleFontSize}
        textFontWeight={titleFontWeight}
        textFontFamily={titleFontFamily}
        textLineHeight={"36px"}
        textLetterSpacing={0.25}
      ></CustomTextBox>
      {/* <div className="row-between">
        {title && (
          <span
            className="commonCardText titleText"
            style={{
              color: titleColor || "black",
              backgroundColor: bgColor || "white",
              fontSize: titleFontSize || 24,
              fontWeight: titleFontWeight || 200,
            }}
          >
            {title}
          </span>
        )}
      </div> */}
      {children}
    </div>
  );
};
