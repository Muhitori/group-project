import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const userStateSelector = (state) => state.user;

export const currentUserSelector = createSelector(
  userStateSelector,
  ({ currentUser }) => {
    return currentUser;
  }
);

export const userReducer = userSlice.reducer;
