import { createSlice } from '@reduxjs/toolkit';


const initialState = {};

const authentificationSlice = createSlice({
    name: 'authentification',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
            state.isLoggedIn = !!action.payload;
        },
        setToken(state, action) {
            state.token = action.payload;
        },
        logout(state) {
            state.user = null;
            state.token = null;
            state.isLoggedIn = false;
        },
    },
});

export default authentificationSlice.reducer;