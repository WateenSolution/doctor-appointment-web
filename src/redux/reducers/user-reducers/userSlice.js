import { createSlice } from "@reduxjs/toolkit";
import {
  addUserAction,
  deleteUserAction,
  getAllUsersAction,
  getUserDetAction,
  updateUserAction,
} from "../../actions";

const initialState = {
  error: null,
  success: false,
  users: [],
  usersInfo: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllUsersAction.pending, (state, { payload }) => {
      state.error = null;
    });
    builder.addCase(getAllUsersAction.fulfilled, (state, { payload }) => {
      state.users = payload?.data?.items;
      state.usersInfo = null;
    });
    builder.addCase(getAllUsersAction.rejected, (state, { payload }) => {
      state.error = payload;
    });

    builder.addCase(addUserAction.pending, (state, { payload }) => {
      state.error = null;
    });
    builder.addCase(addUserAction.fulfilled, (state, { payload }) => {});
    builder.addCase(addUserAction.rejected, (state, { payload }) => {
      state.error = payload;
    });

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

    builder.addCase(updateUserAction.pending, (state, { payload }) => {
      state.error = null;
    });
    builder.addCase(updateUserAction.fulfilled, (state, { payload }) => {
      state.error = null;
    });

    builder.addCase(updateUserAction.rejected, (state, { payload }) => {
      state.error = payload;
    });

    builder.addCase(deleteUserAction.pending, (state, { payload }) => {
      state.error = null;
    });
    builder.addCase(deleteUserAction.fulfilled, (state, { payload }) => {
      state.users = state.users.filter((user) => user.id !== payload?.user_id);
      state.error = null;
    });
    builder.addCase(deleteUserAction.rejected, (state, { payload }) => {
      state.error = payload;
    });
  },
});
export default userSlice.reducer;
