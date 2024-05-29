// CartProvider.js
import { Provider } from 'react-redux';






const CartProvider = ({ children }) => {
  // ... (your existing code)

  return (
    <Provider store={store}>
      <CartContext.Provider
        value={{ cart, cartItemCount, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}
      >
        {children}
      </CartContext.Provider>
    </Provider>
  );
};

export { useCart, CartProvider };
