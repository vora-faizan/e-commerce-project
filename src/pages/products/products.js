import { useEffect, useState } from "react"
import { FakeStoreApi } from '../../services/fake-store-api'
import { useSearchParams } from "react-router-dom"
import { Item } from "../../components/item"
import { useCart } from "../../context/cart"
import "../../components/home.css";

const Products = () => {
   
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [query] = useSearchParams();
    const { addToCart } = useCart()
    const [qurey,setQurey] = useState("");

    const searchQuery = query.get('q');

    const inputStyle = {
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        width: '300px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        outline: 'none'
      };
    const fetchProducts = async () => {
        setLoading(true);
        const data =  await FakeStoreApi.fetchAllProducts();
        setProducts(data.data);
        console.log(data.data)
        setLoading(false)
    }

    useEffect(() => {
    (async() => {
        window.scrollTo(0, 0);
       await fetchProducts();
    })()

    }, [])

    if (!loading && searchQuery && !products.length) {
        return (
            
            <div className="container">
           
                <div className="product py-2">
                    <div className="details p-3">No products found matching your query.</div>
                </div>
            </div>
        )
    }

    return (
        <>
        <div class="popular-items ">

            <div className="container">
           
            <input
    type="search"
    // value={search}
    className="flaticon-search"
    id="datatable-search-input"
    placeholder="Search Products"
    onChange={(e) => setQurey(e.target.value)}
    style={inputStyle}
/>
       {/* <button className="flaticon-search " ></button> */} 
       
       
         
           
                <div className="products my-5">
                    <div className="grid">
                        {loading ? (
                            <div className="loader" />
                        ) : (
                            products.filter((product) => product.name.toLowerCase().includes(qurey.toLowerCase())).map((product) => (
                                <Item key={product._id} data={product} addToCart={() => addToCart(product)} />
                            ))
                        )}
                    </div>
                </div>
            </div>
            </div>

        </>
    )
}

export { Products }