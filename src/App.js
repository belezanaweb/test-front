import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Router from "./routes/routes"

import { ProductsContext } from "./contexts/ProductsContext.js";
import { PaymentInfoContext } from "./contexts/PaymentInfoContext.js";

const App = () => {
    const [products, setProducts] = useState([]);
    const [contextForm, setContextForm] = useState();
  
    useEffect(() => {
      getProducts(); 
    }, [products])

    const handleContextForm = (form) => {
        setContextForm(form);
    }

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
        <PaymentInfoContext.Provider value={contextForm}>
            <ProductsContext.Provider value={products}>
                <Router handleContextForm={handleContextForm}/>
            </ProductsContext.Provider>
        </PaymentInfoContext.Provider>
    </div>
    )
}

export default App
