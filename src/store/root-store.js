import { configureStore } from "@reduxjs/toolkit";
import { loggerMiddleware } from "./middlewares";
import { uiReducer } from "./slices/ui-slice";
import { authReducer } from "./slices/auth-slice";
import { userReducer } from "./user.slice";
import { productReducer } from "./slices/product-slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    product: productReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    loggerMiddleware,
  ],
});
