import React from "react";
import moment from "moment";
import { AppButton } from "../../components";
import { IconButton } from "@mui/material";
import { refreshIcon } from "../../utilities";

export const AppHeading = ({
  title,
  onClick,
  buttonTitle,
  refreshText,
  onRefreshClick,
  showButton,
  disabled,
  dateCheck,
  titleFontWeight,
  titleFontSize,
}) => {
  const currentDate = moment().format("dddd, D MMMM YYYY");

  return (
    <div className="app-heading">
      <div className="title-container">
        <p
          className="heading"
          style={{
            color: "#454545",
            fontFamily: "Lato",
            fontSize: titleFontSize || "25px",
            fontWeight: titleFontWeight,
            lineHeight: "36px",
            letterSpacing: 0.25,
          }}
        >
          {title || ""}
        </p>
        {dateCheck && <span className="current-date">{currentDate}</span>}
      </div>
      <div className="actions">
        {refreshText && (
          <span className="refresh-text">
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
    </div>
  );
};
