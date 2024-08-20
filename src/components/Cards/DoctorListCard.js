import React from "react";
import { useNavigate } from "react-router-dom";
import { CustomTextBox } from "../CustomComponents/CustomTextBox";
import { profile } from "../../utilities";
import { Row, Col, Tooltip } from "antd";
import {
  StarFilled,
  UserOutlined,
  CalendarOutlined,
  MessageOutlined,
} from "@ant-design/icons";

export const DoctorListCard = ({
  id,
  title,
  iconSrc,
  value,
  valUnit,
  unitLeft,
  mT,
  mL,
  rating,
  description,
  totalReviews,
  perUsername,
}) => {
  const navigate = useNavigate();

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

  const handleCalendarClick = () => {
    navigate(`/appointment-form/${id}`, {
      state: { data: { id } },
    });
  };

  const handleChatClick = () => {
    navigate("/live-chat", {
      state: {
        user_id: id,
        username: title,
        doctor_name: perUsername,
        doctor_image: iconSrc,
      },
    });
  };

  const truncateDescription = (desc) => {
    if (desc.length > 15) {
      return desc.slice(0, 15) + "...";
    }
    return desc;
  };

  return (
    <div className="doctorListCard" style={{ marginTop: mT, marginLeft: mL }}>
      <Row>
        <Col span={4}>
          <div className="iconContainer">
            <img height={50} width={50} src={iconSrc || profile} alt={title} />
          </div>
        </Col>
        <Col span={20}>
          <div className="detailsColumn">
            <CustomTextBox
              text={title}
              textFontColor="white"
              textFontSize={18}
              textFontWeight={600}
              textFontFamily="Lato"
              textLineHeight="22px"
              textLetterSpacing={0.2}
            />
            {description && (
              <div className="description">
                <CustomTextBox
                  text={truncateDescription(description)}
                  textFontColor="white"
                  textFontSize={14}
                  textFontWeight={400}
                  textFontFamily="Lato"
                  textLineHeight="16.8px"
                  textLetterSpacing={0.15}
                />
              </div>
            )}
            <div className="valueColumn">
              <CustomTextBox
                text={value ?? "--"}
                textFontColor="white"
                textFontSize={28}
                textFontWeight={700}
                textFontFamily="Lato"
                textLineHeight="40px"
                textLetterSpacing={0.25}
              />
            </div>
          </div>
        </Col>

        <Row>
          <Col span={24}>
            <div>
              {rating !== undefined && (
                <div className="ratingContainer">
                  {renderRatingStars()}
                  <CustomTextBox
                    text={rating ?? "0"}
                    textFontColor="white"
                    textFontSize={14}
                    textFontWeight={400}
                    textFontFamily="Lato"
                    textLineHeight="16.8px"
                    textLetterSpacing={0.15}
                  />
                  {totalReviews !== undefined && (
                    <div className="reviewsContainer">
                      <UserOutlined
                        style={{ fontSize: "14px", color: "#fff" }}
                      />
                      <CustomTextBox
                        text={totalReviews || "0"}
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
          </Col>
        </Row>
        <Col span={24}>
          <div className="additionalIcons">
            <Tooltip title="Appointment">
              <CalendarOutlined
                style={{ fontSize: "20px", color: "#fff", cursor: "pointer" }}
                onClick={handleCalendarClick}
              />
            </Tooltip>
            <Tooltip title="Chat">
              <MessageOutlined
                style={{ fontSize: "20px", color: "#fff", cursor: "pointer" }}
                onClick={handleChatClick}
              />
            </Tooltip>
          </div>
        </Col>
      </Row>
    </div>
  );
};
