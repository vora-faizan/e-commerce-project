
import { Routes, Route } from "react-router-dom"
import React from 'react';
import Home from "./components/Home"
import UseProductView from './pages/product/UseProductView';
import SignIn from "./components/navbar/SignIn"
import Signup from "./components/navbar/SignUp";
import PhoneAuthentication from "./components/Phone";
import { Cart } from "./pages/cart/cart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Products } from "./pages/products/products";
import LoginForm from "./components/Phone";
import FavoritesPage from "./pages/fav/FavoritesPage";

function App() {
  window.scrollTo(0, 0);
  return (
   //<PhoneAuthentication/>
  //<Cart/>
     <div>

     <Header  />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Products/>} />
        <Route path="/:id" element={ <UseProductView/>}></Route>
        <Route path="/login" element={<SignIn />} />
        <Route path="/SignUP" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
       
        <Route path="/favoritesPage" element={<FavoritesPage />} />
        </Routes>
       <Footer />
    </div>
  )
}

export default App
