import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  loading: true,
  errors: [
    {
      id: '1',
      message: 'page not found',
    },
    {
      id: '2',
      message: 'other error',
    },
  ],
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
      return state;
    },
    createError: (state, action) => {
      const error = {
        id: nanoid(),
        message: action.payload
      };
      state.errors = [...state.errors, error];
      return state;
    },
    deleteError: (state, action) => {
      state.errors = state.errors.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { setLoading, createError, deleteError } = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
