import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  category: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const todoStateSelector = (state) => state.todo;

export const todosSelector = createSelector(
  todoStateSelector,
  ({ products }) => {
    return products;
  }
);

export const todoReducer = productSlice.reducer;
