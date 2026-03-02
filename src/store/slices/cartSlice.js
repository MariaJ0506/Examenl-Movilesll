import { createSlice } from "@reduxjs/toolkit";

//cartSlice
//Maneja el estado del carrito de compras.

const initialState = {
  items: [], // [{id,title,price,image,qty}]
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart(state, action) {
      state.items = action.payload;
    },

    //Agregar productos al carrito o incrementa la cantidad de ellos. 
    addItem(state, action) {
      const p = action.payload;
      const found = state.items.find((x) => x.id === p.id);
      if (found) found.qty += 1;
      else state.items.push({ ...p, qty: 1 });
    },

    //Eliminar productos del carrito.
    removeItem(state, action) {
      state.items = state.items.filter((x) => x.id !== action.payload);
    },

    //Modificar la cantidad del producto.  
    setQty(state, action) {
      const { id, qty } = action.payload;
      const q = Math.max(1, Number(qty) || 1);
      const found = state.items.find((x) => x.id === id);
      if (found) found.qty = q;
    },

    //Limpiar carrito por completo. 
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { setCart, addItem, removeItem, setQty, clearCart } = cartSlice.actions;
export default cartSlice.reducer;