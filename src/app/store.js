import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './features/api/apiSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { authSlice } from './features/auth/authSlice';

export const store = configureStore({
  devTools: process.env.NODE_ENV == 'development' ? true : false,
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [authSlice.name]: authSlice.reducer,
  },
  middleware: gDM => gDM().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);
