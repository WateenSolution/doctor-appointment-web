import React from "react";
import { useNavigate } from "react-router-dom";
import { CustomTextBox } from "../CustomComponents/CustomTextBox";
import { profile } from "../../utilities";
import {
  StarFilled,
  UserOutlined,
  CalendarOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { Tooltip } from "antd";
import { motion } from "framer-motion";

export const DoctorListCard = ({
  id, // Add the doctor's ID as a prop
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
  rating,
  description,
  totalReviews,
}) => {
  const navigate = useNavigate();

  // Helper function to render rating stars
  const renderRatingStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Tooltip title={`${i + 1} star`} key={i}>
          <StarFilled
            style={{
              color: i < rating ? "#fadb14" : "#dcdcdc",
              fontSize: "16px",
            }}
          />
        </Tooltip>
      );
    }
    return stars;
  };

  // Click handler for the calendar icon
  const handleCalendarClick = () => {
    navigate(`/appointment-form/${id}`, {
      state: {
        data: { id },
      },
    });
  };

  return (
    <motion.div
      className="doctorListCard"
      style={{
        marginTop: mT,
        marginLeft: mL,
      }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="leftSide">
        <CustomTextBox
          text={title}
          textFontColor="white"
          textFontSize={18}
          textFontWeight={600}
          textFontFamily="Lato"
          textLineHeight="22px"
          textLetterSpacing={0.2}
        />
        <div
          className="valueContainer"
          style={{
            marginTop: con_mT,
          }}
        >
          {unitLeft && value !== null && value !== undefined && (
            <CustomTextBox
              text={unitLeft}
              textFontColor="white"
              textFontSize={14}
              textFontWeight={400}
              textFontFamily="Lato"
              textLineHeight="16.8px"
              textLetterSpacing={0.15}
            />
          )}

          <CustomTextBox
            text={value ?? "--"}
            textFontColor="white"
            textFontSize={32}
            textFontWeight={700}
            textFontFamily="Lato"
            textLineHeight="40px"
            textLetterSpacing={0.25}
          />
          {valUnit && value !== null && value !== undefined && (
            <CustomTextBox
              text={valUnit}
              textFontColor="white"
              textFontSize={14}
              textFontWeight={400}
              textFontFamily="Lato"
              textLineHeight="16.8px"
              textLetterSpacing={0.15}
              style={{ marginLeft: 6 }}
            />
          )}
        </div>
        {description && (
          <div className="description">
            <CustomTextBox
              text={description}
              textFontColor="white"
              textFontSize={14}
              textFontWeight={400}
              textFontFamily="Lato"
              textLineHeight="16.8px"
              textLetterSpacing={0.15}
            />
          </div>
        )}
        {rating !== undefined && (
          <div className="ratingContainer">
            {renderRatingStars()}
            <CustomTextBox
              text={rating ?? "N/A"}
              textFontColor="white"
              textFontSize={14}
              textFontWeight={400}
              textFontFamily="Lato"
              textLineHeight="16.8px"
              textLetterSpacing={0.15}
            />
            {totalReviews !== undefined && (
              <div className="reviewsContainer">
                <UserOutlined style={{ fontSize: "14px", color: "#fff" }} />
                <CustomTextBox
                  text={totalReviews}
                  textFontColor="white"
                  textFontSize={12}
                  textFontWeight={400}
                  textFontFamily="Lato"
                  textLineHeight="16.8px"
                  textLetterSpacing={0.15}
                  style={{ marginLeft: 4 }}
                />
              </div>
            )}
          </div>
        )}
      </div>
      <div className="rightSide">
        <div className="iconContainer">
          <img
            height={icoHeight || 50}
            width={icoWidth || 50}
            src={iconSrc || profile}
            alt={title}
          />
        </div>
        <div className="additionalIcons">
          <Tooltip title="Appointment">
            <CalendarOutlined
              style={{ fontSize: "20px", color: "#fff", cursor: "pointer" }}
              onClick={handleCalendarClick} // Add click handler for calendar icon
            />
          </Tooltip>
          <Tooltip title="Favorites">
            <MessageOutlined style={{ fontSize: "20px", color: "#fff" }} />
          </Tooltip>
        </div>
      </div>
    </motion.div>
  );
};
