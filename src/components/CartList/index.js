import React,{useEffect, useState} from 'react'
import {Border, ImgContainer, ProductDesc} from "../Cart/styles"
import api from "../../services/api"

const CartList = () => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  
  function currency(value){
   return  new Intl.NumberFormat('pt-BR', {
      style:"currency", currency:'BRL'}).format(value)
  }
 
  
    useEffect(() => {
      api.get('5b15c4923100004a006f3c07').then(res => {
          setIsLoaded(true);
          setItems(res.data.items);            
                       
        },
        
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;

  } else {
    
  return (
    <>
    {items.map(item => (
      <Border key={item.product.sku}>
       <ImgContainer>
        <img src={item.product.imageObjects[0].small} alt={item.product.name}/>
       </ImgContainer>           
      <ProductDesc>
        <p>{item.product.name.substring(0,65)}</p>           
       <p>{currency(item.product.priceSpecification.price)}</p>
      </ProductDesc>          
      </Border>
    ))}
    </>
  )
}
}
export default CartList
