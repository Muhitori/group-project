import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ProductService } from '../../services/ProductService';

// const productService = new ProductService();

const initialState = {
  list: [],
  category: '',
  nextPage: '',
};

export const getProductsAsync = createAsyncThunk(
  'product/fetch',
  async ({ link, token }) => {
    const response = await ProductService.getProducts({ link, token });
    return { ...response };
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsAsync.fulfilled, (state, action) => {
      const { data, next } = action.payload;
      state.list = [...data];
      state.nextPage = next;
    });
  },
});

export const productReducer = productSlice.reducer;
