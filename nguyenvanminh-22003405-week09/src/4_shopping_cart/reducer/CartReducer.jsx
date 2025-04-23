import React, { useContext } from 'react';
import CartUI from '../CartUI';
import { CartContext } from '../hook/CartContext';

export default function CartReducer() {
  const { state, dispatch } = useContext(CartContext);

  const addItem = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  return (
    <CartUI
      cartItems={state.cartItems}
      addItem={addItem}
      removeItem={removeItem}
      updateQuantity={updateQuantity}
    />
  );
}