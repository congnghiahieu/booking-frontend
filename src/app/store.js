import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './features/api/apiSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { authSlice } from './features/auth/authSlice';
import { searchSlice } from './features/search/searchSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [authSlice.name]: authSlice.reducer,
    [searchSlice.name]: searchSlice.reducer,
  },
  middleware: gDM => gDM().concat(apiSlice.middleware),
  devTools: false,
});

setupListeners(store.dispatch);
