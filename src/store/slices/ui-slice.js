import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
      return state;
    },
  },
});

export const { toggleSort } = uiSlice.actions;

export const loadingSelector = (state) => state.ui.loading;

export const uiReducer = uiSlice.reducer;
