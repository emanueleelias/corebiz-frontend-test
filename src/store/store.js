import { configureStore } from '@reduxjs/toolkit'
import { newsletterApi } from './apis/newsletterApi';
import { productosApi } from "./apis/productsApi";
import { cartSlice } from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    cartCounter: cartSlice.reducer,
    [productosApi.reducerPath]: productosApi.reducer,
    [newsletterApi.reducerPath]: newsletterApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productosApi.middleware)
      .concat(newsletterApi.middleware)
});
