import React from "react";
import { AppButton } from "../Buttons/AppButton";
import { CustomTextBox } from "../CustomComponents/CustomTextBox";
export const ChartCard1 = ({
  mT,
  title,
  child1,
  child2,
  bgColor,
  paddingLeft,
  paddingRight,
}) => {
  return (
    <div
      className="commonCardCon"
      style={{
        marginTop: mT,
        backgroundColor: bgColor,
        paddingLeft: paddingLeft,
        paddingRight: paddingRight,
      }}
    >
      {child1}
      {child1 && (
        <hr
          className="horizontalLine"
          style={{
            borderTop: "1px solid black",
            width: "100%",
            margin: "40px 0px 40px 0px",
          }}
        />
      )}
      {title ? (
        // <span className="commonCardText titleText">{title}</span>
        <CustomTextBox
          text={title}
          textFontColor={"var(--g11)"}
          textFontSize={18}
          textFontWeight={500}
          textFontFamily={"Lato"}
          textLineHeight={"21.6px"}
          textLetterSpacing={0.15}
        ></CustomTextBox>
      ) : null}
      {child2}
    </div>
  );
};
