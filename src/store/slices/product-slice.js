import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ProductService } from '../../services/ProductService';
import { tokenSelector } from '../selectors/auth-selector';

const initialState = {
  list: [],
  currentProduct: {},
  category: '',
  pageNumber: 1,
  pageCount: 1,
  isPageLoading: false,
};

export const getPageCount = createAsyncThunk(
  'pageCount/fetch',
  async (_, store) => {
    const token = tokenSelector(store.getState());

    const response = await ProductService.getProductPageCount({ token });
    return response;
  }
);

export const getProductsAsync = createAsyncThunk(
  'products/fetch',
  async ({ pageNumber }, store) => {
    const token = tokenSelector(store.getState());

    const response = await ProductService.getProducts({ token, pageNumber });
    return response;
  }
);

export const getProductByIdAsync = createAsyncThunk(
  'productById/fetch',
  async ({ id }, store) => {
    const token = tokenSelector(store.getState());

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
        state.isPageLoading = false;
      })
      .addCase(getProductsAsync.pending, (state) => {
        state.isPageLoading = true;
      })
      .addCase(getProductsAsync.rejected, (state) => {
        state.isPageLoading = false;
      })
      .addCase(getProductByIdAsync.fulfilled, (state, action) => {
        state.currentProduct = action.payload;
      });
  },
});

export const productReducer = productSlice.reducer;
