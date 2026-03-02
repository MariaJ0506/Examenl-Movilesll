import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import cartReducer from "./slices/cartSlice";

//cartThunks
//Maneja persistencia del carrito en AsyncStorage.
//Permite cargar y guardar los productos seleccionados.

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
});