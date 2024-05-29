import { Link ,NavLink} from "react-router-dom"
import { useState,useEffect } from "react";
// In your component file
import 'bootstrap/dist/css/bootstrap.min.css';

import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io';


const Item = ({ data, addToCart }) => {

    const { _id,  name, price } = data
   const [clicked, setClicked] = useState("");

   useEffect(() => {
    // Step 4.1: Read from local storage
    const storedClicked = localStorage.getItem('isClicked_'+_id);

    // Step 4.2: Update the state based on local storage value
    if (storedClicked) 
    {
      setClicked(true);
    }
    else
    {
    setClicked(false);
    }
  }, [_id]);

   const handleClick = () => {
        
    setClicked(!clicked);        
    if(localStorage.getItem('isClicked_'+_id)){
        localStorage.removeItem('isClicked_'+_id)
    }else{
        localStorage.setItem('isClicked_'+_id, JSON.stringify(!clicked));

    }
  };

   // console.log(clicked);
   //const { _id, name, price } = data;
//    const [favorites, setFavorites] = useState([]);

//    useEffect(() => {
//        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
//        if (storedFavorites.length !== 0) {
//            setFavorites([...storedFavorites]);
//        }
//    }, []);
   
//    const toggleFavorite = (itemId) => {
//        if (favorites.includes(itemId)) {
//            const newFavorites = favorites.filter(fav => fav !== itemId);
//            setFavorites(newFavorites); // Remove from favorites
//            localStorage.setItem('favorites', JSON.stringify(newFavorites)); // Update local storage
//        } else {
//            const newFavorites = [...favorites, itemId];
//            setFavorites(newFavorites); // Add to favorites
//            localStorage.setItem('favorites', JSON.stringify(newFavorites)); // Update local storage
//        }
//    };
 console.log(clicked)
   

    return (
        <div className="card">
        <div className="single-popular-items mb-20 text-center">
            <div className="popular-img">
                <img src="assets/img/ds.jpg" alt="" />
                <div className="img-cap">
                    <span onClick={addToCart}> Add to cart</span>
                </div>
                <div className="favorit-items">
                    <span
                        className={`flaticon-heart${clicked ? '' : ''}`}
                        style={{color: clicked ? 'red' : 'white', cursor: 'pointer' }}
                        onClick={handleClick}
                    >
                        {clicked ? '' : ''}
                    </span>
                </div>
            </div>
            <Link to={`/${_id}`} className="link titleLink">
                <div className="popular-caption">
                    <h3>{name}</h3>
                    <span>M.R.P.: ₹{price}</span>
                </div>
            </Link>
        </div>
    </div>
    
 
    )
}

export { Item }