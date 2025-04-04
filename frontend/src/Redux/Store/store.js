import { configureStore } from '@reduxjs/toolkit';
import { apiService } from '../Services/apiServices';
import authentificationSlice from '../Slices/authentificationSlice';


const store = configureStore({
    reducer: {
      [apiService.reducerPath]: apiService.reducer,
      authentification: authentificationSlice,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiService.middleware),
});

export default store;