import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Router from "./routes/routes"

import { ProductsContext } from "./contexts/ProductsContext.js";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, [products])


  const getProducts = async () => {
    try {
      const response = await axios.get("http://www.mocky.io/v2/5b15c4923100004a006f3c07");
      setProducts(response.data.items)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
        <ProductsContext.Provider value={products}>
            <Router />
        </ProductsContext.Provider>
    </div>
  )
}

export default App
