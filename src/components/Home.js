import React from 'react';

//import { useEffect, useState } from 'react';
import "./home.css";
import { Products } from '../pages/products/products';
import { NavLink } from 'react-router-dom';


function Home() {

    // window.scrollTo(0, 0);
    
    // const [users, setUsers] = useState([]);

    // const getUser = async () => {
    //     const response = await fetch("https://fakestoreapi.com/products");

    //     const data = await response.json();
    //    console.log(data);
    //    console.log(response);
    //     setUsers(data)

    // }
    //     const Send = ((e) => {

    // console.log(e);
    //     })

    // const getSingleProduct = async () => {
    //     try {
    //         const response = await fetch("https://chainasta.onrender.com/api/v1/products");

    //         const data=  await response.json();

    //         dispatch({type:"SET_SINGLE_PRODUCT", payload: singleproduct});
    //     } catch (error) {

    //     }

    // }

    // useEffect(() => {
    //     getUser();
    // }, [])
  return (
    <div>



<main>
       
        <div class="slider-area ">
            <div class="slider-active">
             
                <div class="single-slider slider-height d-flex align-items-center slide-bg">
                    <div class="container">
                        <div class="row justify-content-between align-items-center">
                            <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                                <div class="hero__caption">
                                    <h1 data-animation="fadeInLeft" data-delay=".4s" data-duration="2000ms">Select Your New Perfect Style</h1>
                                    <p data-animation="fadeInLeft" data-delay=".7s" data-duration="2000ms">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat is aute irure.</p>
                                   
                                    <div class="hero__btn" data-animation="fadeInLeft" data-delay=".8s" data-duration="2000ms">
                                        <a href="industries.html" class="btn1 hero-btn">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-4 d-none d-sm-block">
                                <div class="hero__img" data-animation="bounceIn" data-delay=".4s">
                                    <img src="assets/img/hero/watch.png" alt="" class=" heartbeat" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             
            
            </div>
        </div>
     
        <section class="new-product-area section-padding30">
            <div class="container">
           
                <div class="row">
                    <div class="">
                        <div class="section-tittle mb-70">
                            <h2>New Arrivals</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <div class="single-new-pro mb-30 text-center">
                            <div class="product-img">
                                <img src="assets/img/gallery/new_product1.png" alt="" />
                            </div>
                            <div class="product-caption">
                                <h3><a href="product_details.html">Thermo Ball Etip Gloves</a></h3>
                                <span>$ 45,743</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <div class="single-new-pro mb-30 text-center">
                            <div class="product-img">
                                <img src="assets/img/gallery/new_product2.png" alt="" />
                            </div>
                            <div class="product-caption">
                                <h3><a href="product_details.html">Thermo Ball Etip Gloves</a></h3>
                                <span>$ 45,743</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <div class="single-new-pro mb-30 text-center">
                            <div class="product-img">
                                <img src="assets/img/gallery/new_product3.png" alt="" />
                            </div>
                            <div class="product-caption">
                                <h3><a href="product_details.html">Thermo Ball Etip Gloves</a></h3>
                                <span>$ 45,743</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
      
       
        <div class="">
            <div class="container">
            
                <div class="row justify-content-center">
                    <div class="">
                        <div class="section-tittle mb-70 text-center">
                            <h2>Popular Items</h2>
                            <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                        </div>
                    </div>
                </div>
                <Products/>
               <div className='container'>
                <div class="row ">
                <div class="room-btn " style={{display:"flex", justifyContent:"center" }}>
                <button className="btn1"> <NavLink to="/shop" className="btn1" >View All Product</NavLink></button>
                </div>
            </div> 
            </div>
            </div>
          
        </div>
  
      
        <div class="video-area my-4 " >
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-lg-12">
                    <div class="video-wrap">
                        <div class="play-btn "><a class="popup-video" href="https://www.youtube.com/watch?v=KMc6DyEJp04"><i class="fas fa-play"></i></a></div>
                    </div>
                    </div>
                </div>
             
                <div class="thumb-content-box">
                    <div class="thumb-content">
                        <h3>Next Video</h3>
                        <a href="#"> <i class="flaticon-arrow"></i></a>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="watch-area section-padding30">
            <div class="container">
                <div class="row align-items-center justify-content-between padding-130">
                    <div class="col-lg-5 col-md-6">
                        <div class="watch-details mb-40">
                            <h2>Watch of Choice</h2>
                            <p>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                            <a href="shop.html" class="btn1">Show Watches</a>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-10">
                        <div class="choice-watch-img mb-40">
                            <img src="assets/img/gallery/choce_watch1.png" alt="" />
                        </div>
                    </div>
                </div>
                <div class="row align-items-center justify-content-between">
                    <div class="col-lg-6 col-md-6 col-sm-10">
                        <div class="choice-watch-img mb-40">
                            <img src="assets/img/gallery/choce_watch2.png" alt="" />
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-6">
                        <div class="watch-details mb-40">
                            <h2>Watch of Choice</h2>
                            <p>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                            <a href="shop.html" class="btn1">Show Watches</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
        <div class="shop-method-area">
            <div class="container">
                <div class="method-wrapper">
                    <div class="row d-flex justify-content-between">
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="single-method mb-40">
                                <i class="ti-package"></i>
                                <h6>Free Shipping Method</h6>
                                <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="single-method mb-40">
                                <i class="ti-unlock"></i>
                                <h6>Secure Payment System</h6>
                                <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                            </div>
                        </div> 
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="single-method mb-40">
                                <i class="ti-reload"></i>
                                <h6>Secure Payment System</h6>
                                <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     
    </main>
    </div>
  )
}

export default Home