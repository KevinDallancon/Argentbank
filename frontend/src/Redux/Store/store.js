import { configureStore } from '@reduxjs/toolkit';
import authentificationSlice from '../Slices/authentificationSlice';


const store = configureStore({
    reducer: {
        authentification: authentificationSlice,
    },
    devTools: true,
});

export default store;