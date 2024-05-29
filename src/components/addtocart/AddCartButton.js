
import { useState } from "react";
// In your component file
import 'bootstrap/dist/css/bootstrap.min.css';


const AddCartButton = ({  addToCart }) => {

  
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
      setClicked(!clicked);
    };
  

    return (
        <div >                        
        <div class="img-cap">
        <button onClick={addToCart} className="btn1"> Add to cart</button>
    </div>   
    </div>
 
    )
}

export { AddCartButton }