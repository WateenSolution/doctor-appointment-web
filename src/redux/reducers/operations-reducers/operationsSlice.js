import { createSlice } from "@reduxjs/toolkit";
import { getOperationsAction, getOperationsTicketsAction } from "../../actions";

const initialState = {
  operationLoad: false,
  operationTicketLoad: false,
  error: null,
  success: false,
  operations: null,
  oemTicket: null,
  stationCounts: {
    healthy: 0,
    faulty: 0,
    disconnected: 0,
  },
};

const operationsSlice = createSlice({
  name: "operations",
  initialState,
  reducers: {
    setStationCounts: (state, action) => {
      state.stationCounts = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getOperationsAction.pending, (state, { payload }) => {
      state.operationLoad = true;
      state.error = null;
    });
    builder.addCase(getOperationsAction.fulfilled, (state, { payload }) => {
      state.operationLoad = false;
      state.operations = payload?.data;

      // Calculate station counts and update the state
      const healthy =
        payload.data.platinum_stations +
        payload.data.gold_stations +
        payload.data.silver_stations;
      const faulty = payload.data.total_stations - healthy;
      const disconnected = payload.data.total_stations - healthy;

      state.stationCounts = { healthy, faulty, disconnected };
    });

    builder.addCase(getOperationsAction.rejected, (state, { payload }) => {
      state.operationLoad = false;
      state.error = payload;
    });
    // oem tickets count
    builder.addCase(
      getOperationsTicketsAction.pending,
      (state, { payload }) => {
        state.operationTicketLoad = true;
        state.error = null;
      }
    );
    builder.addCase(
      getOperationsTicketsAction.fulfilled,
      (state, { payload }) => {
        state.operationTicketLoad = false;
        state.oemTicket = payload?.data;
      }
    );

    builder.addCase(
      getOperationsTicketsAction.rejected,
      (state, { payload }) => {
        state.operationTicketLoad = false;
        state.error = payload;
      }
    );
  },
});
export const { setStationCounts } = operationsSlice.actions;

export default operationsSlice.reducer;
