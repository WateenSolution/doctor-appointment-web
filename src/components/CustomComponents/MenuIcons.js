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

export const BookAppointmentIcon = ({
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
          id="bookAppointmentGradient"
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
        <filter
          id="bookAppointmentShadow"
          x="0"
          y="0"
          width="150%"
          height="150%"
        >
          <feDropShadow
            dx="2"
            dy="2"
            stdDeviation="3"
            floodColor="rgba(0, 0, 0, 0.2)"
          />
        </filter>
      </defs>
      <path
        d="M19 2H16V0H8V2H5C3.9 2 3 2.9 3 4V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V4C21 2.9 20.1 2 19 2ZM5 5H19V8H5V5ZM19 21H5V10H19V21ZM12 12H14V14H16V12H18V10H16V8H14V10H12V12Z"
        fill="url(#bookAppointmentGradient)"
        filter="url(#bookAppointmentShadow)"
      />
    </svg>
  );
};

export const MyAppointmentIcon = ({
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
        d="M19 2H16V0H8V2H5C3.9 2 3 2.9 3 4V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V4C21 2.9 20.1 2 19 2ZM17 8V10H7V8H17ZM17 14V16H13V14H17ZM7 14H11V16H7V14Z"
        fill="url(#appointmentGradient)"
        filter="url(#appointmentShadow)"
      />
    </svg>
  );
};
export const LiveChatIcon = ({
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
        <linearGradient id="chatGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#4e5faf", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#1d3c6e", stopOpacity: 1 }}
          />
        </linearGradient>
        <filter id="chatShadow" x="0" y="0" width="150%" height="150%">
          <feDropShadow
            dx="2"
            dy="2"
            stdDeviation="3"
            floodColor="rgba(0, 0, 0, 0.2)"
          />
        </filter>
      </defs>
      <path
        d="M20 2H4C2.9 2 2 2.9 2 4V18C2 19.1 2.9 20 4 20H18L22 24V4C22 2.9 21.1 2 20 2ZM7 9H17V11H7V9ZM7 13H13V15H7V13Z"
        fill="url(#chatGradient)"
        filter="url(#chatShadow)"
      />
    </svg>
  );
};

export const TelemedicineIcon = ({
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
          id="telemedicineGradient"
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
        <filter id="telemedicineShadow" x="0" y="0" width="150%" height="150%">
          <feDropShadow
            dx="2"
            dy="2"
            stdDeviation="3"
            floodColor="rgba(0, 0, 0, 0.2)"
          />
        </filter>
      </defs>
      <path
        d="M20 2H4C2.9 2 2 2.9 2 4V18C2 19.1 2.9 20 4 20H16L20 24V4C20 2.9 19.1 2 18 2H16V6H8V2H4C2.9 2 2 2.9 2 4V18C2 19.1 2.9 20 4 20H6V18H4V4H18V6H16V18H18V20H4C2.9 20 2 19.1 2 18V6H4V18H18V6H20V18H16L18 20V6C18 4.9 17.1 4 16 4H14V6H10V2H8V4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H18L22 24V4C22 2.9 21.1 2 20 2Z"
        fill="url(#telemedicineGradient)"
        filter="url(#telemedicineShadow)"
      />
      <path d="M10 13H14V15H10V13Z" fill="#ffffff" />
      <path
        d="M12 8C10.34 8 9 9.34 9 11C9 12.66 10.34 14 12 14C13.66 14 15 12.66 15 11C15 9.34 13.66 8 12 8ZM12 12C11.45 12 11 11.55 11 11C11 10.45 11.45 10 12 10C12.55 10 13 10.45 13 11C13 11.55 12.55 12 12 12Z"
        fill="#ffffff"
      />
    </svg>
  );
};

export const PaymentBillingIcon = ({
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
          id="paymentGradient"
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
        <filter id="paymentShadow" x="0" y="0" width="150%" height="150%">
          <feDropShadow
            dx="2"
            dy="2"
            stdDeviation="3"
            floodColor="rgba(0, 0, 0, 0.2)"
          />
        </filter>
      </defs>
      <rect
        x="2"
        y="5"
        width="20"
        height="14"
        rx="2"
        ry="2"
        fill="url(#paymentGradient)"
        filter="url(#paymentShadow)"
      />
      <path
        d="M4 8H20V10H4V8ZM4 12H20V14H4V12ZM4 16H20V18H4V16Z"
        fill="#ffffff"
      />
      <path
        d="M6 8V10H8V8H6ZM6 12V14H8V12H6ZM10 8V10H12V8H10ZM10 12V14H12V12H10ZM14 8V10H16V8H14ZM14 12V14H16V12H14Z"
        fill="#ffffff"
      />
      <path
        d="M10 16H14V18H10V16ZM12 17V17.5H11.5V17H12ZM12 16V15.5H11.5V16H12Z"
        fill="#ffffff"
      />
    </svg>
  );
};
