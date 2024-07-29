import React from "react";
import { CustomTextBox } from "../CustomComponents/CustomTextBox";

export const OverviewCard1 = ({
  title,
  iconSrc,
  value,
  valUnit,
  icoHeight,
  icoWidth,
  unitLeft,
  mT,
  mL,
  con_mT,
}) => {
  return (
    <div
      className="ovCard1Main"
      style={{
        marginTop: mT,
        marginLeft: mL,
      }}
    >
      <div className="leftSide">
        <CustomTextBox
          text={title}
          textFontColor={"white"}
          textFontSize={14}
          textFontWeight={400}
          textFontFamily={"Lato"}
          textLineHeight={"16.8px"}
          textLetterSpacing={0.15}
        ></CustomTextBox>
        <div
          className="ovCard1Cons"
          style={{
            marginTop: con_mT,
          }}
        >
          {unitLeft && value !== null && value !== undefined && (
            // <span className="ovCard1Unit ">{unitLeft}</span>
            <CustomTextBox
              text={unitLeft}
              textFontColor={"white"}
              textFontSize={14}
              textFontWeight={400}
              textFontFamily={"Lato"}
              textLineHeight={"16.8px"}
              textLetterSpacing={0.15}
            ></CustomTextBox>
          )}

          <CustomTextBox
            text={value ?? "--"}
            textFontColor={"white"}
            textFontSize={30}
            textFontWeight={400}
            textFontFamily={"Lato"}
            textLineHeight={"36px"}
            textLetterSpacing={0.25}
          ></CustomTextBox>
          {valUnit && value !== null && value !== undefined && (
            // <span className="ovCard1Unit ">{valUnit}</span>
            <CustomTextBox
              text={valUnit}
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
      <div className="rightSide">
        <div className="ovCard1UpperCon .ovCard1Cons">
          <img height={icoHeight || 25} width={icoWidth || 25} src={iconSrc} />
        </div>
      </div>
    </div>
  );
};
