import React from "react";
import { CustomTextBox } from "../CustomComponents/CustomTextBox";
import { useMediaQuery } from "@mui/material";

export const OverviewCard3 = ({
  title,
  iconSrc,
  value,
  valUnit,
  total,
  totalUnit,
  valFontSize,
  icoHeight,
  icoWidth,
  unitLeft,
  valFontWeight,
  mT,
  mL,
  secondValue,
  secondTitle,
  secondUnit,
}) => {
  const isMobileView = useMediaQuery("(max-width: 500px)");
  const isLargeScreenHeight = useMediaQuery("(min-height: 400px)");
  const isLargeScreenWidth = useMediaQuery("(min-height: 400px)");
  // Calculate the icon height based on screen height percentage
  const iconHeight = isLargeScreenHeight ? "80%" : "70%";
  const iconWidth = isLargeScreenWidth ? "100%" : "70%";
  return (
    <div className="ovCard3Main" style={{ marginTop: mT, marginLeft: mL }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CustomTextBox
          text={secondTitle || ""}
          textFontColor={"white"}
          textFontSize={14}
          textFontWeight={400}
          textFontFamily={"Lato"}
          textLineHeight={"16.8px"}
          textLetterSpacing={0.15}
          mB={10}
        ></CustomTextBox>
        <div style={{ display: "flex", alignItems: "flex-end", marginTop: 10 }}>
          <CustomTextBox
            text={secondValue ?? "--"}
            textFontColor={"white"}
            textFontSize={30}
            textFontWeight={400}
            textFontFamily={"Lato"}
            textLineHeight={"36px"}
            textLetterSpacing={0.25}
          ></CustomTextBox>
          <CustomTextBox
            text={secondUnit}
            textFontColor={"white"}
            textFontSize={14}
            textFontWeight={400}
            textFontFamily={"Lato"}
            textLineHeight={"16.8px"}
            textLetterSpacing={0.15}
            marginLeft={6}
          ></CustomTextBox>
        </div>
        <img
          src={iconSrc}
          alt="icon"
          style={{
            width: iconWidth,
            height: iconHeight,
            marginTop: 10,
          }}
        />
      </div>

      <div>
        {/* <div className=".ovCard1Cons">
          <span
            className="ovCard1Title"
            style={{ fontSize: "14px", fontWeight: valFontWeight || 400 }}
          >
            {title}
          </span>
        </div> */}
        {/* <CustomTextBox
          text={title}
          textFontColor={"white"}
          textFontSize={14}
          textFontWeight={400}
          textFontFamily={"Lato"}
          textLineHeight={"16.8px"}
          textLetterSpacing={0.15}
        ></CustomTextBox> */}

        <div className=".ovCard1Cons">
          {/* {unitLeft && value !== null && value !== undefined && (
            <span className="ovCard1Unit ">{unitLeft}</span>
          )} */}
          {/* <span
            className="valueText ovCard1Value"
            style={{
              fontSize: valFontSize || "36px",
              fontWeight: valFontWeight || 400,
            }}
          >
            {value && value !== undefined && value !== null ? value : "--"}
          </span> */}
          {/* <CustomTextBox
            text={value ?? "--"}
            textFontColor={"white"}
            textFontSize={30}
            textFontWeight={400}
            textFontFamily={"Lato"}
            textLineHeight={"36px"}
            textLetterSpacing={0.25}
          ></CustomTextBox> */}
          {/* {valUnit && value !== null && value !== undefined && (
            <span className="ovCard1Unit ">{valUnit}</span>
          )} */}
        </div>
      </div>
    </div>
  );
};
