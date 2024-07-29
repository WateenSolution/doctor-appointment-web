import React from "react";
import { AppButton } from "../Buttons/AppButton";
import { Col, Row } from "antd";
import { CustomTextBox } from "../CustomComponents/CustomTextBox";

export const OverviewCommonCard = ({
  title,
  children,
  bgColor,
  titleColor,
  titleFontSize,
  titleFontWeight,
  titleFontFamily,
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

      {children}
    </div>
  );
};
