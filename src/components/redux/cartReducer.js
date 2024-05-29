// cartReducer.js
const initialState = {
    cart: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        // Implement logic to add to cart
        return state;
      case 'REMOVE_FROM_CART':
        // Implement logic to remove from cart
        return state;
      case 'INCREASE_QUANTITY':
        // Implement logic to increase quantity
        return state;
      case 'DECREASE_QUANTITY':
        // Implement logic to decrease quantity
        return state;
      default:
        return state;
    }
  };
  
  export default cartReducer;
  