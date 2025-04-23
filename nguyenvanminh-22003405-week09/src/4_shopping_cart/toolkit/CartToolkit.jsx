import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartUI from '../CartUI';
import { addItem, removeItem, updateQuantity } from './CartSlice';

export default function CartToolkit() {
  const cartItems = useSelector(state => state.cartToolkit.cartItems);
  const dispatch = useDispatch();

  return (
    <CartUI
      cartItems={cartItems}
      addItem={(item) => dispatch(addItem(item))}
      removeItem={(id) => dispatch(removeItem(id))}
      updateQuantity={(id, quantity) => dispatch(updateQuantity({ id, quantity }))}
    />
  );
}