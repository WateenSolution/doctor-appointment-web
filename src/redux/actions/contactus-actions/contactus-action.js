import { createAsyncThunk } from "@reduxjs/toolkit";
import { post } from "../../../service";
import { ENDPOINTS } from "../../../utilities";
import * as Types from "../../types";

export const addContactAction = createAsyncThunk(
  Types.ADD_CONTACT,
  async ({ values, onSuccess, onFailure }, { rejectWithValue }) => {
    try {
      const res = await post(ENDPOINTS.ADD_CONTACT, values);
      onSuccess(res?.data);
      return res?.data;
    } catch (error) {
      onFailure(error?.response);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
