import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ProductService } from '../../services/ProductService';

const initialState = {
  list: [],
  currentProduct: {},
  category: '',
};

export const getProductsAsync = createAsyncThunk(
  'product/fetch',
  async ({ token }) => {
    const data = await ProductService.getProducts({ limit: 24, token });
    return data;
  }
);

export const getProductByIdAsync = createAsyncThunk(
  'productById/fetch',
  async ({ id, token }) => {
    const data = await ProductService.getProductById({ id, token });
    return data;
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductsAsync.fulfilled, (state, action) => {
        state.list = [...action.payload];
      })
      .addCase(getProductByIdAsync.fulfilled, (state, action) => {
        state.currentProduct = action.payload;
      });
  },
});

export const productReducer = productSlice.reducer;
