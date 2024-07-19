import React from "react";
import { SwitchTab } from "../../components";
import IconButton from "@mui/material/IconButton";
import { FilterList } from "@mui/icons-material";
import { CustomTextBox } from "../CustomComponents/CustomTextBox";
export const ChartCard = ({
  mT,
  title,
  children,
  tabs,
  activeTab,
  setActiveTab,
  onClickIcon,
  bgColor,
  titleColor,
  titleFontSize,
  titleFontWeight,
  titleFontFamily,
  titleLineHeight,
  titleLetterSpacing,
  mL,
  paddingLeft,
  paddingRight,
}) => {
  return (
    <div
      className="commonCardCon"
      style={{
        marginTop: mT,
        backgroundColor: bgColor,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        paddingLeft: paddingLeft,
        paddingRight: paddingRight,
      }}
    >
      <div className="chartCardTitleCon" style={{ marginLeft: mL }}>
        {title ? (
          // <span
          //   className="commonCardText titleText"
          //   style={{
          //     color: titleColor || "black",
          //     backgroundColor: bgColor || "white",
          //     fontSize: titleFontSize || 24,
          //     fontWeight: titleFontWeight || 200,
          //   }}
          // >
          //   {title}
          // </span>
          <CustomTextBox
            text={title}
            textFontColor={titleColor}
            textFontSize={titleFontSize}
            textFontWeight={titleFontWeight}
            textFontFamily={titleFontFamily}
            textLineHeight={titleLineHeight}
            textLetterSpacing={titleLetterSpacing}
          ></CustomTextBox>
        ) : null}
        {onClickIcon ? (
          <IconButton onClick={onClickIcon}>
            <FilterList />
          </IconButton>
        ) : null}
      </div>
      {tabs && (
        <div className="chartSwitchCon">
          <SwitchTab
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={(item) => setActiveTab(item)}
          />
        </div>
      )}
      {children}
    </div>
  );
};
