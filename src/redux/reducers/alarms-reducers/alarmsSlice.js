import { createSlice } from "@reduxjs/toolkit";
import {
  addAlarmAction,
  deleteAlarmAction,
  getAlarmsAction,
  getTicketsAction,
  manipAlarmStatusAction,
  updateAlramStatusAction,
} from "../../actions";

const initialState = {
  alarmsLoad: false,
  ticketsLoad: false,
  error: null,
  success: false,
  tickets: [],
  alarms: [],
  alarmsFetchTime: null,
};

const alarmsSlice = createSlice({
  name: "alarms",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAlarmsAction.pending, (state, { payload }) => {
      state.alarmsLoad = true;
      state.error = null;
    });
    builder.addCase(getAlarmsAction.fulfilled, (state, { payload }) => {
      state.alarmsLoad = false;
      state.alarms = payload?.data?.items;

      state.alarmsFetchTime = payload?.data?.recent_fetch_time;
    });
    builder.addCase(getAlarmsAction.rejected, (state, { payload }) => {
      state.alarmsLoad = false;
      state.error = payload;
    });

    builder.addCase(getTicketsAction.pending, (state, { payload }) => {
      state.ticketsLoad = true;
      state.error = null;
    });
    builder.addCase(getTicketsAction.fulfilled, (state, { payload }) => {
      state.ticketsLoad = false;
      state.tickets = payload?.data?.items;
    });
    builder.addCase(getTicketsAction.rejected, (state, { payload }) => {
      state.ticketsLoad = false;
      state.error = payload;
    });

    builder.addCase(updateAlramStatusAction.pending, (state, { payload }) => {
      state.error = null;
    });
    builder.addCase(
      updateAlramStatusAction.fulfilled,
      (state, { payload }) => {}
    );
    builder.addCase(updateAlramStatusAction.rejected, (state, { payload }) => {
      state.error = payload;
    });

    builder.addCase(manipAlarmStatusAction.pending, (state, { payload }) => {
      state.error = null;
    });
    builder.addCase(manipAlarmStatusAction.fulfilled, (state, { payload }) => {
      const { id, status } = payload;

      state.alarms = state.alarms.map((obj) => {
        if (obj.id === id) {
          if (status === "Resolved") {
            return { ...obj, status: "Inactive" };
          } else if (status === "Acknowledged") {
            return { ...obj, status: "Acknowledged" };
          }
        }
        return obj;
      });
    });
    builder.addCase(manipAlarmStatusAction.rejected, (state, { payload }) => {
      state.error = payload;
    });

    builder.addCase(addAlarmAction.pending, (state, { payload }) => {
      state.error = null;
    });
    builder.addCase(addAlarmAction.fulfilled, (state, { payload }) => {
      state.error = null;
    });
    builder.addCase(addAlarmAction.rejected, (state, { payload }) => {
      state.error = payload;
    });

    builder.addCase(deleteAlarmAction.pending, (state, { payload }) => {
      state.error = null;
    });
    builder.addCase(deleteAlarmAction.fulfilled, (state, { payload }) => {
      state.alarms = state.alarms.filter(
        (alarm) => alarm.id !== payload?.alarm_id
      );
      state.error = null;
    });
    builder.addCase(deleteAlarmAction.rejected, (state, { payload }) => {
      state.error = payload;
    });
  },
});
export default alarmsSlice.reducer;
