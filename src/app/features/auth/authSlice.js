import { createSlice } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';

const initialUserInfo = {
  id: '',
  googleId: '',
  username: '',
  name: '',
  email: '',
  phone: '',
  address: '',
  avatarUrl: '',
  roles: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    userInfo: initialUserInfo,
  },
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken } = action.payload;
      state.token = accessToken;
      const decoded = jwtDecode(accessToken);
      state.userInfo = decoded.UserInfo;
    },
    clearCrendentials: (state, action) => {
      state.token = null;
      state.userInfo = initialUserInfo;
      localStorage.setItem('persist-login', JSON.stringify(false));
    },
    setName: (state, action) => {
      state.userInfo.name = action.payload;
    },
    setPhone: (state, action) => {
      state.userInfo.phone = action.payload;
    },
  },
});

export const { setCredentials, clearCrendentials, setName, setPhone } = authSlice.actions;

export const selectCurrentToken = state => state.auth.token;
export const selectUserInfo = state => state.auth.userInfo;
