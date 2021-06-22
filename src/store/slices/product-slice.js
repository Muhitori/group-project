import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { productService } from '../../services/ProductService';

const initialState = {
  list: [],
  category: '',
};

export const getProductsAsync = createAsyncThunk(
  'product/fetch',

  async ({ token }) => {
    const data = await productService.getProducts({ limit: 24, token });

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
