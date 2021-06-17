import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const authStateSelector = (state) => state.auth;

export const tokenSelector = createSelector(authStateSelector, ({ token }) => {
  return token;
});

export const authReducer = authSlice.reducer;
