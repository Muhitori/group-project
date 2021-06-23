import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ProductService } from '../../services/ProductService';

const initialState = {
  list: [],
  category: '',
  page: 1,
  pageCount: 1,
};

export const getAllProducts = createAsyncThunk(
  'allProducts/fetch',
  async (token) => {
    const response = await ProductService.getProductPageCount({ token });
    return response;
  }
);

export const getProductsAsync = createAsyncThunk(
  'products/fetch',
  async ({ page, token }) => {
    const response = await ProductService.getProducts({ token, page });
    return response;
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.pageCount = action.payload;
    });
    builder.addCase(getProductsAsync.fulfilled, (state, action) => {
      state.list = [...state.list, ...action.payload];
      state.page += 1;
    });
  },
});

export const productReducer = productSlice.reducer;
