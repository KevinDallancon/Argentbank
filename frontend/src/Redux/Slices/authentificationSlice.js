import { createSlice } from '@reduxjs/toolkit';


// Vérifier dans les deux storages pour l'état initial
const initialState = () => {
  // Vérifier d'abord dans localStorage (Remember Me activé)
  const localToken = localStorage.getItem('token');
  const localUser = localStorage.getItem('user');
  
  // Ensuite dans sessionStorage (Remember Me désactivé)
  const sessionToken = sessionStorage.getItem('token');
  const sessionUser = sessionStorage.getItem('user');
  
  return {
    token: localToken || sessionToken || null,
    user: localUser ? JSON.parse(localUser) : (sessionUser ? JSON.parse(sessionUser) : null),
    isAuthenticated: !!(localToken || sessionToken),
    rememberMe: !!localToken // Si token est dans localStorage, rememberMe était activé
  };
};

const authentificationSlice = createSlice({
  name: 'authentification',
  initialState: initialState(),
  reducers: {
     // Met à jour l'état quand l'utilisateur se connecte
    loginSuccess: (state, action) => {
      const { token, user, rememberMe } = action.payload;
      state.token = token;
      state.user = user || null; // Accepte null ou undefined pour user
      state.isAuthenticated = true;
      state.rememberMe = rememberMe;

      // Stocker selon le choix de rememberMe
      if (rememberMe) {
        // Si Remember Me est activé, utiliser localStorage
        localStorage.setItem('token', token);
        if (user) localStorage.setItem('user', JSON.stringify(user));
        // Nettoyer sessionStorage au cas où
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user');
      } else {
        // Si Remember Me est désactivé, utiliser sessionStorage
        sessionStorage.setItem('token', token);
        if (user) sessionStorage.setItem('user', JSON.stringify(user));
        // Nettoyer localStorage au cas où
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    },
    // Met à jour le profil utilisateur
    updateUserProfile: (state, action) => {
      state.user = { ...state.user, ...action.payload };
      
      // Mettre à jour dans le storage approprié
      const userJSON = JSON.stringify(state.user);
      if (state.rememberMe) {
        localStorage.setItem('user', userJSON);
      } else {
        sessionStorage.setItem('user', userJSON);
      }
    },
    // Efface les données utilisateur
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      sessionStorage.clear();
    }
  }
});

export const { loginSuccess, updateUserProfile, logout } = authentificationSlice.actions;
export default authentificationSlice.reducer;