import React from 'react'
import { Title, Section } from "../styles"
import {Container} from "../Cart/styles"
import CartList from "../CartList"
import Total from '../Total'
import img from "../../assets/img/success.png"
import { useParams } from 'react-router-dom'
import {DivConf, Img} from "./styles"

const Confirmation = () => {
  const data = useParams();
  const cardNumber = data.cardNumber;  
  const expiry = data.expiry;
  function maskExpiry(numero){
    let newNumber
        const part1 = numero.slice(0,2)
        const part2 = numero.slice(2,6)        
        newNumber = `${part1}/${part2}`;        
        return newNumber;
  }
  return (
   <Section>
      <Img src={img} alt="compra confirmada"/>
     <Title>Pagamento</Title>
         <DivConf>
         <p>{cardNumber}</p> 
          <p>{data.name}</p>
          <p>{maskExpiry(expiry)}</p>       
          
         </DivConf>
     <Title>Produtos</Title>
     <Container>
        <CartList/>
     </Container>
      <Total />
   </Section>
  )
}

export default Confirmation
