import React from "react";

export const CardCallout = ({ title, subtitle }) => {
  return (
    <div>
      <div>
        <h6>{title}</h6>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};
