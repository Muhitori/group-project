import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ProductService } from '../../services/ProductService';

const initialState = {
  list: [],
  searchResult: [],
  searchQuery: '',
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

export const getProductsByTitleAsync = createAsyncThunk(
  'productByTitle/fetch',
  async ({ token, searchQuery }) => {
    const data = await ProductService.getProductsByTitle({
      token,
      searchQuery,
    });
    return { data, searchQuery };
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
      })
      .addCase(getProductsByTitleAsync.fulfilled, (state, action) => {
        const { data, searchQuery } = action.payload;
        state.searchResult = [...data];
        state.searchQuery = searchQuery;
      });
  },
});

export const productReducer = productSlice.reducer;
