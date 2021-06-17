import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: true,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
      return state;
    },
  },
});

export const { setLoading } = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
