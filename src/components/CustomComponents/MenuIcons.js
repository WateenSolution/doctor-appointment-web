import React from "react";

export const HomeIcon = ({ fill = "#4e5faf", height = "24", width = "24" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="homeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#4e5faf", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#1d3c6e", stopOpacity: 1 }}
          />
        </linearGradient>
        <filter id="homeShadow" x="0" y="0" width="150%" height="150%">
          <feDropShadow
            dx="2"
            dy="2"
            stdDeviation="3"
            floodColor="rgba(0, 0, 0, 0.2)"
          />
        </filter>
      </defs>
      <path
        d="M12 3L2 12H5V21H10V15H14V21H19V12H22L12 3Z"
        fill="url(#homeGradient)"
        filter="url(#homeShadow)"
      />
    </svg>
  );
};

export const LogoutIcon = ({
  fill = "#4e5faf",
  height = "24",
  width = "24",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoutGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#4e5faf", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#1d3c6e", stopOpacity: 1 }}
          />
        </linearGradient>
        <filter id="logoutShadow" x="0" y="0" width="150%" height="150%">
          <feDropShadow
            dx="2"
            dy="2"
            stdDeviation="3"
            floodColor="rgba(0, 0, 0, 0.2)"
          />
        </filter>
      </defs>
      <path
        d="M10 17L15 12L10 7L8.58579 8.41421L11.1716 11H3V13H11.1716L8.58579 15.5858L10 17ZM20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3ZM19 18H5V6H19V18Z"
        fill="url(#logoutGradient)"
        filter="url(#logoutShadow)"
      />
    </svg>
  );
};

export const AppointmentIcon = ({
  fill = "#4e5faf",
  height = "24",
  width = "24",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="appointmentGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" style={{ stopColor: "#4e5faf", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#1d3c6e", stopOpacity: 1 }}
          />
        </linearGradient>
        <filter id="appointmentShadow" x="0" y="0" width="150%" height="150%">
          <feDropShadow
            dx="2"
            dy="2"
            stdDeviation="3"
            floodColor="rgba(0, 0, 0, 0.2)"
          />
        </filter>
      </defs>
      <path
        d="M19 3H16V1H8V3H5C3.9 3 3 3.9 3 5V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V5C21 3.9 20.1 3 19 3ZM5 4H6V6H5V4ZM19 20H5V8H19V20ZM13 11H11V13H13V11ZM13 15H11V17H13V15ZM16 13H14V15H16V13ZM16 17H14V19H16V17Z"
        fill="url(#appointmentGradient)"
        filter="url(#appointmentShadow)"
      />
    </svg>
  );
};
