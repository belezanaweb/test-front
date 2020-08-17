import React, {useState, useEffect} from 'react'
import {Container, Lista} from './styles'
import api from "../../services/api"

const Total = () => {
  const [error, setError] = useState(null);
  
  const [total, setTotal] = useState([]);
  const [discount, setDiscount] = useState([]);
  const [shipping, setShipping] = useState([]);
  const [subTotal, setSubTotal] = useState([]);
  const sinalNegativo = "-";  
  
  function currency(value){
    return  new Intl.NumberFormat('pt-BR', {
       style:"currency", currency:'BRL'}).format(value)
   }
  
  
  useEffect(()=>{
    api.get('5b15c4923100004a006f3c07').then(res => {
      setTotal(res.data.total);
      setDiscount(res.data.discount);
      setShipping(res.data.shippingTotal);
      setSubTotal(res.data.subTotal);
    },
    (error) => {
      
      setError(error);
    }
    
    )
  }, [])
  if (error) {
    return <div>Error: {error.message}</div>;
  }
   else {

  return (
   <Container>
     <Lista>
       <p>Produtos</p>
       <p>{currency(subTotal)}</p>
       </Lista>
       <Lista>
       <p>Frete</p>
       <p>{currency(shipping)}</p>
       </Lista>
       <Lista>
       <p>Desconto</p>
       <p>{discount > 0 ? sinalNegativo+" ":""}{currency(discount)} </p>
       </Lista>
       <Lista>
       <p>Total</p>
       <p>{currency(total)}</p>
       </Lista>
   </Container>
     
  )
}}

export default Total
