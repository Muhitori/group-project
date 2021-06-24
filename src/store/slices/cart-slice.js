import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CartService } from '../../services/CartService';
import { OrderService } from '../../services/OrderService';
import {
  currentUserIdSelector,
  tokenSelector,
} from '../selectors/auth-selector';

const initialState = {
  products: [],
  productsCounts: {},
};

export const createOrderAsync = createAsyncThunk(
  'order/fetch',
  async (products, store) => {
    const token = tokenSelector(store.getState());
    const userId = currentUserIdSelector(store.getState());

    const data = await OrderService.createOrder({
      token,
      userId,
      products
    });
    return data;
  }
);

export const getUserCartAsync = createAsyncThunk(
  'getUserCart/fetch',
  async (_, store) => {
    const token = tokenSelector(store.getState());
    const userId = currentUserIdSelector(store.getState());

    const data = await CartService.getUserCart({
      token,
      userId,
    });
    return data;
  }
);

export const getCartProductsAsync = createAsyncThunk(
  'getCartProducts/fetch',
  async (_, store) => {
    const token = tokenSelector(store.getState());

    const data = await CartService.getCartProducts({ token });
    return data;
  }
);

export const getCartProductsCountsAsync = createAsyncThunk(
  'getCartProductsIds/fetch',
  async () => {
    const products = await CartService.getCartProductsCounts();
    return products;
  }
);

export const changeProductCountAsync = createAsyncThunk(
  'changeCountInCart/fetch',
  async ({ productId, count }, store) => {
    const token = tokenSelector(store.getState());
    const userId = currentUserIdSelector(store.getState());
    const data = await CartService.changeProductCount({
      userId,
      productId,
      count,
      token,
    });
    return data;
  }
);

export const addToCartAsync = createAsyncThunk(
  'addToCart/fetch',
  async ({ productId }, store) => {
    const token = tokenSelector(store.getState());
    const userId = currentUserIdSelector(store.getState());

    const data = await CartService.addToCart({ userId, productId, token });
    return data;
  }
);

export const removeFromCartAsync = createAsyncThunk(
  'removeFromCart/fetch',
  async ({ productId }, store) => {
    const token = tokenSelector(store.getState());
    const userId = currentUserIdSelector(store.getState());

    const data = await CartService.removeFromCart({ userId, productId, token });
    return data;
  }
);

export const toggleCartProductAsync = createAsyncThunk(
  'toggleCartProduct/fetch',
  async ({ productId }, store) => {
    const token = tokenSelector(store.getState());
    const userId = currentUserIdSelector(store.getState());

    const data = await CartService.toggleCartProduct({
      userId,
      productId,
      token,
    });
    return data;
  }
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCartProductsAsync.fulfilled, (state, action) => {
        state.products = action.payload;
        return state;
      })
      .addCase(changeProductCountAsync.fulfilled, (state, action) => {
        state.productsCounts = action.payload;
      })
      .addCase(getCartProductsCountsAsync.fulfilled, (state, action) => {
        state.productsCounts = action.payload;
        return state;
      })
      .addCase(toggleCartProductAsync.fulfilled, (state, action) => {
        state.productsCounts = action.payload;
        return state;
      })
      .addCase(removeFromCartAsync.fulfilled, (state, action) => {
        state.productsCounts = action.payload;
        return state;
      })
      .addCase(createOrderAsync.fulfilled, (state) => {
        state = initialState;
        return state;
      });
  },
});

export const cartReducer = cartSlice.reducer;
