import { createAsyncThunk } from "@reduxjs/toolkit";
import * as Types from "../../types";
import { ENDPOINTS } from "../../../utilities";

import { get } from "../../../service";

export const getOperationsAction = createAsyncThunk(
  Types.GET_OPERATIONS,
  async ({ onSuccess, onFailure }, { rejectWithValue }) => {
    try {
      const res = await get(ENDPOINTS.GET_OPERATIONS);
      onSuccess(res?.data);
      return res?.data;
    } catch (error) {
      onFailure(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const getOperationsTicketsAction = createAsyncThunk(
  Types.GET_OEM_TICKET,
  async ({ onSuccess, onFailure }, { rejectWithValue }) => {
    try {
      const res = await get(ENDPOINTS.GET_OEM_TICKETS);
      onSuccess(res?.data);
      return res?.data;
    } catch (error) {
      onFailure(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
