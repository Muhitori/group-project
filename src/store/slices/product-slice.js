import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ProductService } from '../../services/ProductService';
import { tokenSelector } from '../selectors/auth-selector';

const initialState = {
  list: [],
  category: '',
};

export const getProductsAsync = createAsyncThunk(
  'product/fetch',
  async (_, store) => {
    const token = tokenSelector(store.getState());

    const data = await ProductService.getProducts({
      limit: 24,
      token,
    });
    return data;
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsAsync.fulfilled, (state, action) => {
      state.list = [...action.payload];
    });
  },
});

export const productReducer = productSlice.reducer;
