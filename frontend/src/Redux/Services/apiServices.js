import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// API service pour les opérations liées aux utilisateurs
export const apiService = createApi({
  reducerPath: 'api',
  
  // Configuration de base pour toutes les requêtes
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:3001/api/v1',
    
    // Préparation des en-têtes avec authentification
    prepareHeaders: (headers) => {
      const authToken = sessionStorage.getItem('token');
      
      if (authToken) {
        headers.set('Authorization', `Bearer ${authToken}`);
      }
      return headers;
    },
  }),
  
  // Définition des points d'accès API
  endpoints: (builder) => ({
    // Point d'accès pour l'authentification
    authUser: builder.mutation({
      query: (loginData) => ({
        url: '/user/login',
        method: 'POST',
        body: loginData,
      }),
    }),
    
    // Point d'accès pour récupérer les informations du profil
    fetchUserProfile: builder.query({
      query: () => ({
        url: '/user/profile',
        method: 'POST',
      }),
    }),
    // Point d'accès pour mettre à jour le profil utilisateur
    updateUserProfile: builder.mutation({
      query: (userData) => ({
        url: '/user/profile',
        method: 'PUT',
        body: userData,
      }),
    }),
  }),
});

// Export des hooks pour utilisation dans les composants
export const { 
  useAuthUserMutation,  // Correspond à "authUser" + "Mutation"
  useFetchUserProfileQuery,  // Correspond à "fetchUserProfile" + "Query"
  useUpdateUserProfileMutation  // Correspond à "updateUserProfile" + "Mutation"
} = apiService;