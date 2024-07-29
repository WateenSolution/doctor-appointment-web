import React from "react";
import { Card } from "antd";
import { AppHeading } from "..";

export const ProfileDocComp = ({ profilePicture, title, name, speciality }) => {
  return (
    <Card className="ProfileComp">
      <AppHeading
        title={"Profile"}
        titleFontWeight={800}
        titleFontSize={"20px"}
      />
      <div className="profile-header">
        <img src={profilePicture} alt="Profile" className="profile-picture" />
        <h3 className="profile-title">{title}</h3>
        <p className="profile-name">{name}</p> {/* Added name here */}
      </div>
      <div className="profile-details">
        <p className="profile-speciality">{speciality}</p>
      </div>
    </Card>
  );
};
