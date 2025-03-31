import { createSlice } from '@reduxjs/toolkit';

// État initial
const initialState = {
  token: localStorage.getItem('token') || null,
  error: null
};

const sliceAuth = createSlice({
  name: 'authentification',
  initialState,
  reducers: {
    // login: (state, action) => {
    //   state.token = action.payload;
    //   localStorage.setItem('token', action.payload);
    // },
    // logout: (state) => {
    //   state.token = null;
    //   localStorage.removeItem('token');
    // },
    // setError: (state, action) => {
    //   state.error = action.payload;
    // }
  }

})


export default sliceAuth.reducer;