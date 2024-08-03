import { combineReducers } from "redux";
import * as Types from "../types";

import authReducer from "./auth-reducers/authSlice";
import dashboardReducer from "./dashboard-reducers/dashboardSlice";
import appointmentReducer from "./appointment-reducers/appointmentSlice";

const root_reducer = combineReducers({
  /* your app’s top-level reducers */
  auth: authReducer,
  dashboard: dashboardReducer,
  appointment: appointmentReducer,
});

const rootReducer = (state, action) => {
  if (action?.type == "auth/logout/fulfilled") {
    state = undefined;
  }
  return root_reducer(state, action);
};

export default rootReducer;
