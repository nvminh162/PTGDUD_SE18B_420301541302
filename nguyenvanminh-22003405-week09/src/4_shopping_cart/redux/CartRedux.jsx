import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartUI from '../CartUI';
import { addItem, removeItem, updateQuantity } from './Action';

export default function CartRedux() {
  const cartItems = useSelector(state => state.cartRedux.cartItems);
  const dispatch = useDispatch();

  return (
    <CartUI
      cartItems={cartItems}
      addItem={(item) => dispatch(addItem(item))}
      removeItem={(id) => dispatch(removeItem(id))}
      updateQuantity={(id, quantity) => dispatch(updateQuantity(id, quantity))}
    />
  );
}