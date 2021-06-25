import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ProductService } from '../../services/ProductService';
import { tokenSelector } from '../selectors/auth-selector';
import { pageNumberSelector } from '../selectors/product-selector';

const initialState = {
  list: [],
  searchResult: [],
  searchQuery: '',
  currentProduct: {},
  category: '',
  pageNumber: 1,
  pageCount: 1,
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
    const currentPage = pageNumberSelector(store.getState());

    if (pageNumber < currentPage) {
      return null;
    }

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

export const getProductsByTitleAsync = createAsyncThunk(
  'productByTitle/fetch',
  async ({ searchQuery }, store) => {
    const token = tokenSelector(store.getState());

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
      .addCase(getPageCount.fulfilled, (state, action) => {
        state.pageCount = action.payload;
      })
      .addCase(getProductsAsync.fulfilled, (state, action) => {
        if (!action.payload) {
          return;
        }

        state.list = [...state.list, ...action.payload];
        state.pageNumber += 1;
        state.isPageLoading = false;
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
