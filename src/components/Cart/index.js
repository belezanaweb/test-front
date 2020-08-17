import React from 'react';
import {Container, ButtonPay} from "./styles"
import Total from"../Total"
import { Title, Section } from "../styles"
import CartList from "../CartList"

function Cart() {
  
  const messageButton='Seguir para o pagamento';
  
     
    return (

      <Section>
        <Title>Produtos</Title>
     <Container>             
         <CartList/>
     </Container>    
     <Total />  
     <ButtonPay type="button" href={"/payment"}>
          <p>{messageButton}</p>       
       </ButtonPay>       
      
     </Section>
    );
  }

export default Cart 