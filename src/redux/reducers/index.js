import { combineReducers } from "redux";
import * as Types from "../types";

import authReducer from "./auth-reducers/authSlice";
import overviewReducer from "./overview-reducers/overviewSlice";
import devicesReducer from "./devices-reducers/devicesSlice";
import siteSlice from "./site-reducers/siteSlice";
import alarmsSlice from "./alarms-reducers/alarmsSlice";
import operationsSlice from "./operations-reducers/operationsSlice";
import inductionSlice from "./induction-reducers/inductionSlice";
import userSlice from "./user-reducers/userSlice";
import reportSlice from "./report-reducers/reportSlice";
import factorSlice from "./factor-reducers/factorSlice";

const root_reducer = combineReducers({
  /* your app’s top-level reducers */
  auth: authReducer,
  overview: overviewReducer,
  devices: devicesReducer,
  sites: siteSlice,
  alarms: alarmsSlice,
  operations: operationsSlice,
  inductions: inductionSlice,
  users: userSlice,
  report: reportSlice,
  factor: factorSlice,
});

const rootReducer = (state, action) => {
  if (action?.type == "auth/logout/fulfilled") {
    state = undefined;
  }
  return root_reducer(state, action);
};

export default rootReducer;
