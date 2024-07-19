export const CustomTextBox = ({
  text,
  textFontFamily,
  textFontSize,
  textFontWeight,
  textFontColor,
  mT,
  mB,
  mL,
  mR,
  margin,
  textLineHeight,
  textLetterSpacing,
}) => {
  return (
    <div>
      <span
        style={{
          fontSize: textFontSize || 20,
          color: textFontColor || "",
          fontFamily: textFontFamily || "",
          fontWeight: textFontWeight || 300,
          marginTop: mT || 0,
          marginBottom: mB || 0,
          marginRight: mR || 0,
          marginLeft: mL || 0,
          //margin: margin,
          lineHeight: textLineHeight || 0,
          letterSpacing: textLetterSpacing || 0,
        }}
      >
        {text}
      </span>
    </div>
  );
};
