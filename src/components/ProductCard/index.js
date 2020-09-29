import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
    Card,
    ProductImage,
    ProductTextsimple,
    ProductTextStrong
} from "./styled";

const ProductCard = (props) => {
    const [products, setProducts] =  useState([])    
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('http://www.mocky.io/v2/5b15c4923100004a006f3c07');  
            setProducts(result.data.items)
        }     
        fetchData()
    }, [])
       
    return(        
        <>         
            {products.map(item => { 
                return(
                    <Card key={item.product.sku}>                       
                        <ProductImage src={item.product.imageObjects[0].medium} />
                        <ProductTextsimple>
                            {item.product.name}
                        </ProductTextsimple>
                        <ProductTextStrong>
                            R$ {item.product.priceSpecification.originalPrice}
                        </ProductTextStrong>
                    </Card> 
                )                                 
            })}                                      
        </>
    )     
}
export default ProductCard