import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: { token: null },
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken } = action.payload;
      state.token = accessToken;
    },
    clearCrendentials: (state, action) => {
      state.token = null;
    },
  },
});

export const { setCredentials, clearCrendentials } = authSlice.actions;

export const selectCurrentToken = state => state.auth.token;
