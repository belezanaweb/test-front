import React, { useEffect, useContext } from 'react';
import { useHistory } from "react-router-dom";
import {ContainerContent} from '../../App'
import CartContext from '../../contexts/CartContext';
import CardContext from '../../contexts/CardContext';
import Header from '../../components/Header';
import Section from '../../components/Section';
import PaymentData from '../../components/PaymentData';
import SuccessMessage from '../../components/SuccessMessage';
import ProductList from '../../components/ProductList';
import Total from '../../components/Total';

function Success() {
  const history = useHistory();
  const cartContext = useContext(CartContext);
  const cardContext = useContext(CardContext);

  useEffect(() => {
    if (!cartContext) {
      history.push("/cart")
    }
    if (!cardContext.card.valid) {
      history.push("/cart")
    }
  }, [cardContext.card.valid, cartContext]);

  return (
    <>
    <Header activeSuccess={true}/>
    <ContainerContent>
      <SuccessMessage/>
      <Section title={"pagamento"} component={<PaymentData/>}></Section>
      <Section title={"produtos"} component={<ProductList themeType={"small"}/>}></Section>
      <Total/>
    </ContainerContent>    
    </>

  );
}
export default Success;
