import { useSelector } from 'react-redux';

const useCart = () => {
  const cart = useSelector((state) => state.cart);
  // ... (other logic)

  return { cart, cartItemCount, addToCart, removeFromCart, increaseQuantity, decreaseQuantity };
};

export default useCart;