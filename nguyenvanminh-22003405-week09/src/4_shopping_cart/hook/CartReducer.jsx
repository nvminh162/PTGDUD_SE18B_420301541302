export const initialState = {
    cartItems: [],
  };
  
  export default function CartReducer(state = initialState , action) {
    switch (action.type) {
      case 'ADD_ITEM':
        // Check if item already exists in cart
        const existingItem = state.cartItems.find(item => item.id === action.payload.id);
        if (existingItem) {
          return {
            cartItems: state.cartItems.map(item =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          };
        }
        return {
          cartItems: [...state.cartItems, action.payload]
        };
        
      case 'REMOVE_ITEM':
        return {
          cartItems: state.cartItems.filter(item => item.id !== action.payload)
        };
        
      case 'UPDATE_QUANTITY':
        return {
          cartItems: state.cartItems.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: action.payload.quantity }
              : item
          )
        };
        
      default:
        return state;
    }
  }