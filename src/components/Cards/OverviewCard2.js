import React from "react";
import { CustomTextBox } from "../CustomComponents/CustomTextBox";

export const OverviewCard2 = ({ mT, title, value, unit, unitLeft }) => {
  return (
    <div
      className="ovCard2Main"
      style={{
        marginTop: mT,
      }}
    >
      <CustomTextBox
        text={title}
        textFontColor={"white"}
        textFontSize={14}
        textFontWeight={400}
        textFontFamily={"Lato"}
        textLineHeight={"16.8px"}
        textLetterSpacing={0.15}
        mB={10}
      ></CustomTextBox>

      <div className="ovCard2Con">
        {unitLeft && value !== null && value !== undefined && (
          <CustomTextBox
            text={unitLeft}
            textFontColor={"white"}
            textFontSize={14}
            textFontWeight={400}
            textFontFamily={"Lato"}
            textLineHeight={"16.8px"}
            textLetterSpacing={0.15}
            mR={6}
          ></CustomTextBox>
        )}

        <CustomTextBox
          text={value ?? "0"}
          textFontColor={"white"}
          textFontSize={30}
          textFontWeight={400}
          textFontFamily={"Lato"}
          textLineHeight={"36px"}
          textLetterSpacing={0.25}
        />

        {unit && value !== null && value !== undefined && value !== NaN && (
          // <span className="ovCard2Unit">{unit}</span>
          <CustomTextBox
            text={unit}
            textFontColor={"white"}
            textFontSize={14}
            textFontWeight={400}
            textFontFamily={"Lato"}
            textLineHeight={"16.8px"}
            textLetterSpacing={0.15}
            mL={6}
          ></CustomTextBox>
        )}
      </div>
    </div>
  );
};
