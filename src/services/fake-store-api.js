const FakeStoreApi = {
    fetchAllProducts: async () => {
        const res = await fetch('http://localhost:3000/api/v1/products');
        const result = res.json();
return result
    
    },
    // fetchProductById: async (ProductId) => {
    //     const res = await fetch(`https://chainasta.onrender.com/api/v1/products/${ProductId}`)
    //     const result = await res.json()
    //     return result
    // },
    // fetchProductsBySearchQuery: async (query) => {
    //     const res = await fetch("https://fakestoreapi.com/products")
    //     const result = await res.json()
    //     return result.filter((product) => product.title.toLowerCase().includes(query))
    // },
}

export { FakeStoreApi }