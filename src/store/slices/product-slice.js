import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ProductService } from '../../services/ProductService';

const initialState = {
  list: [],
  currentProduct: {},
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
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.pageCount = action.payload;
      })
      .addCase(getProductsAsync.fulfilled, (state, action) => {
        state.list = [...state.list, ...action.payload];
        state.page += 1;
      })
      .addCase(getProductByIdAsync.fulfilled, (state, action) => {
        state.currentProduct = action.payload;
      });
  },
});

export const productReducer = productSlice.reducer;
