import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from "react-router-dom"
import { FakeStoreApi } from '../../services/fake-store-api'
import axios from 'axios';
import { AddCartButton } from '../../components/addtocart';
import { useCart } from "../../context/cart"


function UseProductView() {
  
  
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const { id } = useParams("");
    const [posts, setPosts] = useState([]);
    const { addToCart } = useCart()

    const storedCart = localStorage.getItem('cart');
      console.log(storedCart);
  
    const [cart, setCart] = useState(() => {
     
        // Try to get cart data from localStorage, if not found, return an empty array
        const storedCart = localStorage.getItem('cart');
        console.log(storedCart);
        console.log(storedCart ? JSON.parse(storedCart) : []);
        return storedCart ? JSON.parse(storedCart) : [];
      });
      
      

    

  useEffect(() => {
    axios
    .get(`http://localhost:3000/api/v1/products/${id}`)
    .then(response => {
        setPosts(response.data.data);
        
      })
      .catch(error => {
        console.error(error);
      })
      // const storedCart = localStorage.getItem('cart');
      // console.log(storedCart);
      localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // useEffect(() => {
  //   localStorage.setItem('cart', JSON.stringify(cart));
  // }, []);

  return (
    <div>
        <div class="watch-area ">
            <div class="container">
                <div class="row align-items-center justify-content-between">
                    <div class="col-lg-6 col-md-6 col-sm-10">
                        <div class="choice-watch-img mb-40">
                            <img src="assets/img/coffee.jpg" alt="" />
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-6">
                    <div class="watch-details mb-40">
                    <h3>{posts.name}</h3>
                    <p >Product Ratings <span style={{color:"#f1f110", fontSize:"28px"}}>&#9733;</span>
                    <b>{posts.ratingsAverage }</b> (customer review {posts.ratingsQuantity} )</p> 
                    <span className="" style={{ fontSize:"28px"}}>M.R.P: <del> {posts.price +250}</del>  </span>  <span className="" style={{ fontSize:"28px"}}><b>₹{posts.price} </b></span> <br/>
                    <p className='section-tittle '> {posts.summary}</p>
                    
             <div class="img-cap my-3">
            
            <AddCartButton key={posts._id} data={posts} addToCart={() => addToCart(posts)} />
        </div>
           
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  );
}

export default UseProductView 