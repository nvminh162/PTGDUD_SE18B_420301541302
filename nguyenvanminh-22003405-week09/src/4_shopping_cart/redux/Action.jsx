export const addItem = (item) => ({
    type: 'ADD_ITEM',
    payload: item
  });
  
  export const removeItem = (id) => ({
    type: 'REMOVE_ITEM',
    payload: id
  });
  
  export const updateQuantity = (id, quantity) => ({
    type: 'UPDATE_QUANTITY',
    payload: { id, quantity }
  });