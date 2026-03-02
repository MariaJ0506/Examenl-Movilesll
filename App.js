import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./src/store/store";
import AppNavigator from "./src/navigation/AppNavigator";
import { loadAuthFromStorage } from "./src/store/thunks/authThunks";
import { loadCartFromStorage, saveCartToStorage } from "./src/store/thunks/cartThunks";

function Bootstrap() {
  const dispatch = useDispatch();
  const cartItems = useSelector((s) => s.cart.items);

  useEffect(() => {
    dispatch(loadAuthFromStorage());
    dispatch(loadCartFromStorage());
  }, []);

  useEffect(() => {
    //Guarda lo que contenga el carrito cada vez que cambie.
    dispatch(saveCartToStorage(cartItems));
  }, [cartItems]);

  return <AppNavigator />;
}

export default function App() {
  return (
    <Provider store={store}>
      <Bootstrap />
    </Provider>
  );
}