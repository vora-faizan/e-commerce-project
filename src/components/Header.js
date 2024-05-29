import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/cart';

//import { useCart } from '../context/cart';



function Header() {
  const { cart } = useCart();
  //const [list, setList] = useState([]);
  const [clicked, setClicked] = useState("");


  const handleClick = () => {
    setClicked(clicked);
  };

  
  

  return (
    <div>
      <div className="header-area">
        <div className="main-header header-sticky">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg  navbar-light " style={{ justifyContent: 'space-around' }}>
              <div className="ml-50 mr-80">
                <NavLink to="/">
                  <img src="assets/img/logo/logo.png" alt="" />
                </NavLink>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="bb ">
                <div className="collapse navbar-collapse mt-20" id="navbarSupportedContent">
                  <ul className="navbar-nav p-2">
                    <li className="nav-item active">
                      <a className="nav-link" href="/">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="./shop">
                        Shop
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="./login">
                        Login
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Blog
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">
                          Blog
                        </a>
                        <a className="dropdown-item" href="#">
                          Blog Details
                        </a>
                      </div>
                    </li>
                    <li className="nav-item">
                      
                    <a className="nav-link " href="#">
                        Contact
                      </a>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link " >
                       
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link " href="./SignUP">
                        <span className="flaticon-user"></span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " href="./cart">
                        <span className="flaticon-shopping-cart">
                          <p className="translate-middle badge border rounded-circle bg-danger">{cart.length}</p>
                        </span>
                    
                      </a>
                     
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " href="./favoritesPage">
                        <span className="flaticon-heart">
                          <p className="translate-middle badge border rounded-circle bg-danger"></p>
                        </span>
                    
                      </a>
                     
                    </li>
                    
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
