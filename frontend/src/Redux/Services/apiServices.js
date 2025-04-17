import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { updateUserProfile } from '../Slices/authentificationSlice';

// URL de base de l'API
const BASE_URL = 'http://localhost:3001/api/v1';

export const apiService = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ 
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      // Récupérer le token depuis le state Redux
      const token = getState().authentification.token;
      
      // Si le token existe, ajouter l'en-tête d'autorisation
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Profile'],
  endpoints: (builder) => ({
    // Endpoint pour l'authentification
    authUser: builder.mutation({
      query: (credentials) => ({
        url: '/user/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    
    // Endpoint pour récupérer le profil utilisateur
    fetchUserProfile: builder.query({
      query: () => ({
        url: '/user/profile',
        method: 'POST', // Utiliser POST pour récupérer le profil
        body: {} 
      }),
      providesTags: ['Profile'],
      // Gérer la réponse pour mettre à jour automatiquement le store redux
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (data?.body) {
            dispatch(updateUserProfile({
              firstName: data.body.firstName,
              lastName: data.body.lastName
            }));
          }
        } catch (err) {
          console.error('Erreur lors de la récupération du profil:', err);
        }
      }
    }),
    
    // Endpoint pour mettre à jour le profil utilisateur
    updateUserProfile: builder.mutation({
      query: (userData) => ({
        url: '/user/profile',
        method: 'PUT',
        body: userData,
      }),
      //déclenche automatiquement un rafraîchissement des données
      invalidatesTags: ['Profile'],
      // Mettre à jour automatiquement le store redux après une mise à jour réussie
      async onQueryStarted(userData, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(updateUserProfile({
            firstName: data.body.firstName,
            lastName: data.body.lastName
          }));
        } catch (err) {
          console.error('Erreur lors de la mise à jour du profil:', err);
        }
      }
    }),
  }),
});

export const { 
  useAuthUserMutation,
  useFetchUserProfileQuery, 
  useUpdateUserProfileMutation
} = apiService;