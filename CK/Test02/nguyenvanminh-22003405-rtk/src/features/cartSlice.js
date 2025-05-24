import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "carts",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;

      const existItem = state.cart.find((item) => item.id === newItem.id);
      if (!existItem) {
        state.cart.push({ ...newItem, quantity: 1 });
      } else {
        existItem.quantity++;
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;

      const existItem = state.cart.find((item) => item.id === id);

      if (!existItem) return state;

      if (existItem.quantity === 1)
        state.cart = state.cart.filter((item) => item.id !== id);
      else existItem.quantity--;
    },
    resetCart: (state) => {
      state.cart = [];
    },
  },
  extraReducers: (builder) => {
    builder;
  },
});

export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
