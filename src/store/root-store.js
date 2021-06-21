import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { loggerMiddleware } from './middlewares';
import { uiReducer } from './slices/ui-slice';
import { authReducer } from './slices/auth-slice';
import { productReducer } from './slices/product-slice';

const reducers = combineReducers({
  auth: authReducer,
  product: productReducer,
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
    ...getDefaultMiddleware(),
    loggerMiddleware,
  ],
});
