import { createSlice } from '@reduxjs/toolkit';

const authenticationSlice = createSlice({
  name: 'Auth',
  initialState: {
    user: null,
    token: sessionStorage.getItem('token') || null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      const { token, user } = action.payload;
      state.token = token;
      state.user = user;
      sessionStorage.setItem('token', token);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      sessionStorage.removeItem('token');
    }
  }
});

export const { loginSuccess, logout } = authenticationSlice.actions;
export default authenticationSlice.reducer;