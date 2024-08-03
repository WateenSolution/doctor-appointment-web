import { createSlice } from "@reduxjs/toolkit";
import {
  getUserDetAction,
  availableTimeStatusAction,
  getAppointTimeAction,
  submitAppointmentFormAction,
  getPatientAppointListAction,
} from "../../actions";

const initialState = {
  error: null,
  success: false,
  usersInfo: null,
  statusAvailable: null,
  appointmentBook: null,
  appointmentForm: null,
};

const AppointmentSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserDetAction.pending, (state, { payload }) => {
      state.error = null;
    });
    builder.addCase(getUserDetAction.fulfilled, (state, { payload }) => {
      state.error = null;
      state.usersInfo = payload?.data;
    });
    builder.addCase(getUserDetAction.rejected, (state, { payload }) => {
      state.error = payload;
    });

    builder.addCase(availableTimeStatusAction.pending, (state, { payload }) => {
      state.error = null;
    });
    builder.addCase(
      availableTimeStatusAction.fulfilled,
      (state, { payload }) => {
        state.error = null;
        state.statusAvailable = payload?.data;
      }
    );

    builder.addCase(
      availableTimeStatusAction.rejected,
      (state, { payload }) => {
        state.error = payload;
      }
    );

    builder.addCase(getAppointTimeAction.pending, (state, { payload }) => {
      state.error = null;
    });
    builder.addCase(getAppointTimeAction.fulfilled, (state, { payload }) => {
      state.error = null;
      state.appointmentBook = payload?.data;
    });
    builder.addCase(getAppointTimeAction.rejected, (state, { payload }) => {
      state.error = payload;
    });

    builder.addCase(
      submitAppointmentFormAction.rejected,
      (state, { payload }) => {
        state.error = payload;
      }
    );

    builder.addCase(
      submitAppointmentFormAction.pending,
      (state, { payload }) => {
        state.error = null;
      }
    );
    builder.addCase(
      submitAppointmentFormAction.fulfilled,
      (state, { payload }) => {
        state.error = null;
        state.appointmentForm = payload?.data;
      }
    );

    builder.addCase(
      getPatientAppointListAction.pending,
      (state, { payload }) => {
        state.operationLoad = true;
        state.error = null;
      }
    );
    builder.addCase(
      getPatientAppointListAction.fulfilled,
      (state, { payload }) => {
        state.operationLoad = false;
        state.patientAppList = payload;
      }
    );

    builder.addCase(
      getPatientAppointListAction.rejected,
      (state, { payload }) => {
        state.operationLoad = false;
        state.error = payload;
      }
    );
  },
});
export default AppointmentSlice.reducer;
