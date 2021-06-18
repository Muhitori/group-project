import { configureStore } from '@reduxjs/toolkit';
import { loggerMiddleware } from './middlewares';
import { uiReducer } from './slices/ui-slice';
import { authReducer } from './slices/auth-slice';
import { productReducer } from './slices/product-slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    loggerMiddleware,
  ],
});
