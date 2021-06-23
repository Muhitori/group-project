import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { FavoritesService } from '../../services/FavoritesService';
import {
  currentUserIdSelector,
  tokenSelector,
} from '../selectors/auth-selector';

const initialState = {
  products: [],
  productsIds: [],
};

export const getUserFavoritesAsync = createAsyncThunk(
  'getUserCart/fetch',
  async (_, store) => {
    const token = tokenSelector(store.getState());
    const userId = currentUserIdSelector(store.getState());

    const data = await FavoritesService.getUserFavorites({
      token,
      userId,
    });
    return data;
  }
);

export const getFavoriteProductsAsync = createAsyncThunk(
  'getFavoriteProducts/fetch',
  async (_, store) => {
    const token = tokenSelector(store.getState());

    const data = await FavoritesService.getFavoriteProducts({ token });
    return data;
  }
);

export const getFavoriteProductsIdsAsync = createAsyncThunk(
  'getFavoriteProductsIds/fetch',
  async () => {
    const products = await FavoritesService.getFavoriteProductsIds();
    return products;
  }
);

export const addToFavoritesAsync = createAsyncThunk(
  'addToFavorites/fetch',
  async ({ productId }, store) => {
    const token = tokenSelector(store.getState());

    const data = await FavoritesService.addToFavorites({
      productId,
      token,
    });
    return data;
  }
);

export const removeFromFavoritesAsync = createAsyncThunk(
  'removeFromFavorites/fetch',
  async ({ productId }, store) => {
    const token = tokenSelector(store.getState());

    const data = await FavoritesService.removeFromFavorites({
      productId,
      token,
    });
    return data;
  }
);

export const toggleFavoriteProductAsync = createAsyncThunk(
  'toggleFavoriteProduct/fetch',
  async ({ productId }, store) => {
    const token = tokenSelector(store.getState());

    const data = await FavoritesService.toggleFavoriteProduct({
      productId,
      token,
    });
    return data;
  }
);

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFavoriteProductsAsync.fulfilled, (state, action) => {
        state.products = action.payload;
        return state;
      })
      .addCase(getFavoriteProductsIdsAsync.fulfilled, (state, action) => {
        state.productsIds = action.payload;
        return state;
      })
      .addCase(toggleFavoriteProductAsync.fulfilled, (state, action) => {
        state.productsIds = action.payload;
        return state;
      });
  },
});

export const favoritesReducer = favoritesSlice.reducer;
