import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { FavoritesService } from '../../services/FavoritesService';

const initialState = {
  products: [],
  productIds: [],
};

export const getFavoriteProductsAsync = createAsyncThunk(
  'favoritesByUserId/fetch',
  async ({ token, userId }) => {
    const data = await FavoritesService.getFavoriteProductsByUserId({
      limit: 24,
      token,
      userId,
    });
    return data;
  }
);

export const getFavoriteProductsIdsAsync = createAsyncThunk(
  'favoritesIdsByUserId/fetch',
  async ({ token, userId }) => {
    const { products } = await FavoritesService.getUserFavorites({
      limit: 24,
      token,
      userId,
    });
    return products;
  }
);

export const addToFavoritesAsync = createAsyncThunk(
  'addToFavorites/fetch',
  async ({ userId, productId, token }) => {
    const data = await FavoritesService.addToFavorites({
      userId,
      productId,
      token,
    });
    return data;
  }
);

export const removeFromFavoritesAsync = createAsyncThunk(
  'removeFromFavorites/fetch',
  async ({ userId, productId, token }) => {
    const data = await FavoritesService.removeFromFavorites({
      userId,
      productId,
      token,
    });
    return data;
  }
);

export const toggleFavoriteProductAsync = createAsyncThunk(
  'toggleFavoriteProduct/fetch',
  async ({ userId, productId, token }) => {
    const data = await FavoritesService.toggleFavoriteProduct({
      userId,
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
