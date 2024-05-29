
import  { createContext ,useState, useContext, useEffect } from 'react';

import Swal from 'sweetalert2';

const initialState = {
    cart: [],
    cartItemCount: () => 0,
    addToCart: () => null,
    removeFromCart: () => null,
    increaseQuantity: () => null,
    decreaseQuantity: () => null,
}

const CartContext = createContext(initialState)

const useCart = () => useContext(CartContext)

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        // Try to get cart data from localStorage, if not found, return an empty array
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
      });
    
    console.log(cart);
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
      }, [cart]);
      


       


    const clearCart = () => {
        // Using SweetAlert to confirm before clearing the cart
        Swal.fire({
          title: 'Are you sure?',
          text: 'This will clear your shopping cart!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, clear it!',
          cancelButtonText: 'No, keep it',
        }).then((result) => {
          if (result.isConfirmed) {
            // User clicked "Yes," clear the cart
            setCart([]);
            Swal.fire('Cleared!', 'Your shopping cart has been cleared.', 'success');
          }
        });
      };


    const cartItemCount = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0)
    }

    const addToCart = (product) => {
        const productIdx = cart.findIndex((item) => item.product._id === product.id)
        if (productIdx !== -1) {
            increaseQuantity(product._id)
        } else {
            setCart([...cart, { product, quantity: 1 }])
        }
    }

    const removeFromCart = (productId) => {
        setCart(cart.filter((item) => item.product._id !== productId))
    }

    const increaseQuantity = (productId) => {
        const copy = cart.slice()
        const productIdx = copy.findIndex((item) => item.product._id === productId)
        if (productIdx !== -1) {
            copy[productIdx].quantity += 1
            setCart(copy)
        }
    }

    const decreaseQuantity = (productId) => {
        const copy = cart.slice()
        const productIdx = copy.findIndex((item) => item.product._id === productId)
        if (productIdx !== -1 && copy[productIdx].quantity > 1) {
            copy[productIdx].quantity -= 1
            setCart(copy)
        }
    }

    return (
        <CartContext.Provider
            value={{ cart, cartItemCount, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart }}
        >
            {children}
        </CartContext.Provider>
    )
}

export { useCart, CartProvider }