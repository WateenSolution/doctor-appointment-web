import React from "react";
import { AppButton } from "../../components";
import { IconButton } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { CustomTextBox } from "../CustomComponents/CustomTextBox";
import { refreshIcon } from "../../utilities";
export const AppHeading = ({
  title,
  onClick,
  buttonTitle,
  refreshText,
  onRefreshClick,
  showButton,
  disabled,
  titleColor,
  titleFontSize,
  titleFontWeight,
  titleFontFamily,
  titleLineHeight,
  titleLetterSpacing,
}) => {
  return (
    <div className="app-heading">
      <p
        className="heading"
        style={{
          color: titleColor || "#454545",
          fontFamily: "Lato",
          fontSize: "30px",
          fontWeight: 400,
          lineHeight: "36px",
          letterSpacing: 0.25,
        }}
      >
        {title || ""}
        {refreshText && (
          <span
            style={{
              color: "var(--primary_color)",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "16.8px",
              letterSpacing: 0.15,
              marginLeft: "8px",
            }}
          >
            {`Data available as of ${refreshText}`}
            <IconButton
              sx={{
                marginLeft: "4px",
                backgroundColor: "var(--neutral_light)",
                borderRadius: "4px",
                padding: "10px",
                "&:hover": {
                  boxShadow: "0px 5px 14px 0px var(--box_shadow)",
                  backgroundColor: "var(--neutral_light)",
                },
              }}
              onClick={onRefreshClick}
            >
              <img src={refreshIcon} height={20} width={20} />
            </IconButton>
          </span>
        )}
      </p>

      {showButton && (
        <AppButton
          buttonTitle={buttonTitle}
          onClick={onClick}
          borderRadius={10}
          backgroundColor={"var(--primary_color)"}
          disabled={disabled}
        />
      )}
    </div>
  );
};
