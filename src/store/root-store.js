import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { loggerMiddleware, errorHandlingMiddleware } from './middlewares';
import { uiReducer } from './slices/ui-slice';
import { authReducer } from './slices/auth-slice';
import { productReducer } from './slices/product-slice';
import { cartReducer } from './slices/cart-slice';
import { favoritesReducer } from './slices/favorites-slice';

const reducers = combineReducers({
  auth: authReducer,
  product: productReducer,
  cart: cartReducer,
  favorites: favoritesReducer,
  ui: uiReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['ui', 'product'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    loggerMiddleware,
    errorHandlingMiddleware,
  ],
});
