export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const WEATHER_BASE_URL = process.env.REACT_APP_WEATHER_BASE_URL;
console.log("base addrees is", BASE_URL);
export const ENDPOINTS = {
  LOGIN: "/auth/login",
  LOGOUT: "/auth/logout",
  FORGOT_PASSWORD: "/auth/forget-password",
  CHANGE_PASSWORD: "/auth/change-password",
  RESET_PASSWORD: "/auth/reset-password",

  //Dashboard
  GET_DASHBOARD_DETAIL: "/dashboard/get-person-info",
  FILTER_ALL_DOC: "/dashboard/filter-Or-All-Doc",
  GET_BOOKED_PATIENT: "/dashboard/get-booked-patient",

  //appointment
  GET_USER_BY_ID: "/appointment/get-user",
  AVAILABLE_TIME_STATUS: "/appointment/status-available-time",
  GET_APPOINT_BOOK_TIME: "/appointment/get-appoint-time",
  ADD_APPOINT_FORM: "/appointment/add-patient-form",
  GET_PAT_APPOINT_LIST: "/appointment/get-pat-app-list",
  ADD_RATING: "/appointment/add-rating",
  GET_DOC_APPOINT_LIST: "/appointment/get-doc-app-list",
};
