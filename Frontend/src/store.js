import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/authSlice"; // Correct import path
import { apiSlice } from "./Slices/apiSlice"; // Correct import path
import cartReducer from "./Slices/cartSlice"

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
