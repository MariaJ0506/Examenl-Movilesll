import { createSlice } from "@reduxjs/toolkit";

 //authSlice
 //Controla el estado global de autenticación.

const initialState = {
  token: null, //token: Inidica la sesión que esta activa.
  user: null, //user: Este almacena el nombre del usuario.
  loading: true, //loading: Este indica si se está cargando la sesión. 
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

    //setLoading: Este se encarga de controlar el estado de carga.
    setLoading(state, action) {
      state.loading = action.payload;
    },

    //setAuth: Este guarda token y usuario
    setAuth(state, action) {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },

    //clearAuth: Este elimina la sesión.
    clearAuth(state) {
      state.token = null;
      state.user = null;
    },
  },
});

export const { setLoading, setAuth, clearAuth } = authSlice.actions;
export default authSlice.reducer;
