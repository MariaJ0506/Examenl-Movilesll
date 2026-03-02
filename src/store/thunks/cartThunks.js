import AsyncStorage from "@react-native-async-storage/async-storage";
import { setCart, clearCart } from "../slices/cartSlice";

//cartThunks
//Maneja persistencia del carrito en AsyncStorage.
//Permite cargar y guardar productos seleccionados.

const CART_KEY = "FAKESTORE_CART";

export const loadCartFromStorage = () => async (dispatch) => {
  const raw = await AsyncStorage.getItem(CART_KEY);
  if (raw) dispatch(setCart(JSON.parse(raw)));
};

export const saveCartToStorage = (items) => async () => {
  await AsyncStorage.setItem(CART_KEY, JSON.stringify(items));
};

export const clearCartStorage = () => async (dispatch) => {
  await AsyncStorage.removeItem(CART_KEY);
  dispatch(clearCart());
};