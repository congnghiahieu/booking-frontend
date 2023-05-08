import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './features/api/apiSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { authSlice } from './features/auth/authSlice';

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: gDM => gDM().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV == 'development' ? true : false,
  // devTools: true,
});

setupListeners(store.dispatch);
