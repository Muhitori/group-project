import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ProductService } from '../../services/ProductService';

const initialState = {
  list: [],
  currentProduct: {},
  category: '',
  pageNumber: 1,
  pageCount: 1,
  loadPage: false
};

export const getPageCount = createAsyncThunk(
  'pageCount/fetch',
  async (token) => {
    const response = await ProductService.getProductPageCount({ token });
    return response;
  }
);

export const getProductsAsync = createAsyncThunk(
  'products/fetch',
  async ({ pageNumber, token }) => {
    const response = await ProductService.getProducts({ token, pageNumber });
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
      .addCase(getPageCount.fulfilled, (state, action) => {
        state.pageCount = action.payload;
      })
      .addCase(getProductsAsync.fulfilled, (state, action) => {
        state.list = [...state.list, ...action.payload];
        state.pageNumber += 1;
        state.loadPage = false;
      })
      .addCase(getProductsAsync.pending, (state) => {
        state.loadPage = true;
      })
      .addCase(getProductsAsync.rejected, (state) => {
        state.loadPage = false;
      })
      .addCase(getProductByIdAsync.fulfilled, (state, action) => {
        state.currentProduct = action.payload;
      });
  },
});

export const productReducer = productSlice.reducer;
