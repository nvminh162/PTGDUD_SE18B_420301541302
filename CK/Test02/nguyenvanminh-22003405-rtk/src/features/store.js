import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/productSlice";
import cartSlice from "../features/cartSlice";
import orderDeliverySlice from "../features/orderDeliverySlice";

const store = configureStore({
  reducer: {
    product: productSlice,
    cart: cartSlice,
    order: orderDeliverySlice,
  },
});

export default store;
