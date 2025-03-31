import { configureStore } from '@reduxjs/toolkit';

// Configuration du store central
export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer
  },
});