import { Link } from "react-router-dom"
import { useCart } from "../../context/cart"
import "./cart.css"

const SHIPPING_CHARGES = 25

const Cart = () => {
    const { cart, clearCart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart()

    
  

    window.scrollTo(0, 0);


    const cartTotal = () => {
        return cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
    }

    const round = (value, decimals) => {
        return Number(Math.round(value + "e" + decimals) + "e-" + decimals)
    }

    return (
        <div className="cartWrapper">
            <div className="container">
                {cart.length >= 1 ? (
                    <div className="grid my-5">
                        <div className="cartItem p-3">
                            <h2>Order Summary</h2>
                            {cart.map((item) => (
                                <div className="item" key={item.product._id}>
                                    <div className="grid py-3">
                                        <div className="itemImage">
                                            <img src="assets/img/coffee.jpg" alt="" />
                                        </div>
                                        <div className="itemDesc">
                                            <div className="title">
                                                <Link to={"/Products-details/" + item.product._id} className="titleLink">
                                                    {item.product.name}
                                                </Link>
                                            </div>
                                            <span className="price">${round(item.product.price * item.quantity, 2)}</span>
                                            {/* <div className="remove">Remove</div> */}
                                        </div>
                                        <div className="itemControl flex">
                                            <div>
                                                <button
                                                    onClick={() => increaseQuantity(item.product._id)}
                                                    className=" btn1 px-2 py-2 rounded"
                                                >
                                                    +
                                                </button>
                                                <span className="mx-1 h-auto w-auto">{item.quantity}</span>
                                                <button
                                                    onClick={() => decreaseQuantity(item.product._id)}
                                                    disabled={item.quantity === 1}
                                                    className=" btn1 px-2 py-2  rounded" 
                                                    
                                                >
                                                    -
                                                </button>
                                                <div 
                                                    className="btn1 hero-btn  rounded my-1"
                                                    onClick={() => removeFromCart(item.product._id)}
                                                >
                                                    Remove
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="hero__btn my-2 ">
                            <button
                            className="btn1 hero-btn"
                            onClick={clearCart}>
                            Clear cart
                          </button>
                            </div>
                        </div>
                        <div className="payment p-3">
                            <h2>Payment Summary</h2>
                            <div className="summary py-3 my-2">
                                <div className="flex py-1">
                                    <span>Subtotal:</span>
                                    <span className="price">${round(cartTotal(), 2)}</span>
                                </div>
                                <div className="flex py-1">
                                    <span>Shipping Fee:</span>
                                    <span className="price">${SHIPPING_CHARGES}</span>
                                </div>
                                <div className="summary flex py-1">
                                    <span>Total:</span>
                                    <span className="price">${round(cartTotal() + SHIPPING_CHARGES, 2)}</span>
                                </div>
                               
                            </div>
                            <div 
                            className="btn1   rounded my-1"
                            
                        >
                        Buy Now
                        </div>
                        </div>
                        
                    </div>
                ) : (
                    <div className="grid my-5">
                    <div className="error">
                        <p>&#9432; Cart is empty</p>
                    </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export { Cart }