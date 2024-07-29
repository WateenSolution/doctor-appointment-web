import { createSlice } from "@reduxjs/toolkit";
import {
  forgotPassAction,
  loginAction,
  logoutAction,
  resetPassAction,
} from "../../actions";

// initialize userToken from local storage

const initialState = {
  loginLoad: false,
  forgotLoad: false,
  resetLoad: false,
  chngLoad: false,
  userInfo: null,
  userToken: null,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginAction.pending, (state, { payload }) => {
      state.loginLoad = true;
      state.error = null;
    });
    builder.addCase(loginAction.fulfilled, (state, { payload }) => {
      state.loginLoad = false;
      state.userInfo = payload;
    });

    builder.addCase(loginAction.rejected, (state, { payload }) => {
      state.loginLoad = false;
      state.error = payload;
    });

    builder.addCase(logoutAction.pending, (state, { payload }) => {
      state.error = null;
    });
    builder.addCase(logoutAction.fulfilled, (state, { payload }) => {
      state.userInfo = null;
    });

    builder.addCase(logoutAction.rejected, (state, { payload }) => {
      state.error = state.userInfo;
    });

    builder.addCase(forgotPassAction.pending, (state, { payload }) => {
      state.forgotLoad = true;
      state.error = null;
    });
    builder.addCase(forgotPassAction.fulfilled, (state, { payload }) => {
      console.log("payload", payload);
      state.forgotLoad = false;
      state.userInfo = payload;
    });

    builder.addCase(forgotPassAction.rejected, (state, { payload }) => {
      state.forgotLoad = false;
      state.error = state.userInfo;
    });

    builder.addCase(resetPassAction.pending, (state, { payload }) => {
      state.resetLoad = true;
      state.error = null;
    });
    builder.addCase(resetPassAction.fulfilled, (state, { payload }) => {
      state.resetLoad = false;
    });

    builder.addCase(resetPassAction.rejected, (state, { payload }) => {
      state.resetLoad = false;
    });
  },
});
export default authSlice.reducer;
