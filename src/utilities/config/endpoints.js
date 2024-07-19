export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const WEATHER_BASE_URL = process.env.REACT_APP_WEATHER_BASE_URL;
console.log("base addrees is", BASE_URL);
export const ENDPOINTS = {
  LOGIN: "/auth/login",
  LOGOUT: "/auth/logout",
  FORGOT_PASSWORD: "/auth/forget-password",
  CHANGE_PASSWORD: "/auth/change-password",
  RESET_PASSWORD: "/auth/reset-password",

  //Overview
  GET_OVERVIEW: "/station/overview",
  PR_COMPARISON: "/station/pr-comparison",

  //Devices
  GET_DEVICES: "/station/devices",
  GET_DEVICE_DETAIL: "/station/device-details",
  GET_METER_DETAIL: "/station/smart-meter",

  //Sites
  GET_SITES: "/station/stations",
  GET_ORGANIZATIONAL_SITES: "/station/organizational-stations",
  GET_SITE_DETAIL: "/station/station-details",
  GET_SITE_WEATHER: "/weather/byLatLong",
  //UPDATE_EXPORT_ENABLE: "/station/update-export-enabled",
  ACTUAL_VS_EXPECTED: "/station/actual-vs-expected",
  INVERTER_WISE_POWER: "/station/inverter-wise-power",
  POWER_MIX: "/station/power-mix",
  GET_STATION_FILTER: "/station/get-station-day-data",
  GET_STATION_VENDOR: "/station/find-station-day-data",

  //Users
  GET_USERS: "/auth/users",
  ADD_USER: "/auth/add-user",
  GET_USER_DETAILS: "/auth/user",
  UPDATE_USER: "/auth/update-user",
  DELETE_USER: "/auth/delete-user",

  //Alarms
  GET_ALARMS: "/station/alarms",
  UPDATE_ALARM_STATUS: "/station/update-alarm-status",
  ADD_ALARM: "/station/add-alarm",
  DELETE_ALARM: "/station/delete-alarm",
  GET_TICKET: "/alarm/alarm-tickets",
  GET_OEM_TICKETS: "/alarm/onm-tickets",

  //Operations
  GET_OPERATIONS: "/station/onm",

  //Induction
  GET_FORMS: "/onboarding/all-stations",
  ADD_ONBOARDING_STATION: "/onboarding/add-update-station",
  GET_ONBOARDING_DETAILS: "/onboarding/station-details",
  UPDATE_ONBOARDING_STATION: "/onboarding/update-station-status",
  GET_ORGANIZATIONS: "/station/organizations",

  //Contact Us
  ADD_CONTACT: "/contact/add-contact",

  //Reports
  GENERATE_REPORT: "/station/generate-report",

  // factor
  GET_FACTOR: "station/get-co2-factor",
  EDIT_FACTOR: "station/edit-co2-factor",

  ADD_SUPPLIER: "station/add-supplier",
};
