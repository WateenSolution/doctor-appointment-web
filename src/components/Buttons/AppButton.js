import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const StyledButton = styled(Button)(
  ({ theme, borderRadius, backgroundColor, textColor }) => ({
    borderRadius: borderRadius,
    backgroundColor: backgroundColor,
    color: textColor,
    textTransform: "none",
    "&:hover": {
      backgroundColor: backgroundColor,
    },
    "&:active": {
      backgroundColor: backgroundColor,
    },
    padding: "10px 20px",
    // Conditional styling for disabled state
    "&:disabled": {
      color: "white !important",
      backgroundColor: "var(--g1) !important",
    },
  })
);

export const AppButton = ({
  buttonTitle,
  onClick,
  startIcon,
  borderRadius,
  backgroundColor,
  disabled = false,
  textColor,
  variant,
  width,
  ...restProps
}) => {
  return (
    <StyledButton
      variant={variant || "contained"}
      startIcon={startIcon}
      style={{ borderRadius, backgroundColor, color: textColor, width: width }}
      onClick={onClick}
      {...restProps}
      disabled={disabled}
    >
      {buttonTitle}
    </StyledButton>
  );
};
