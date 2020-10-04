import React, { useEffect, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { ContainerContent } from '../../App'
import CartContext from '../../contexts/CartContext';
import CardContext from '../../contexts/CardContext';
import Header from '../../components/Header';
import Section from '../../components/Section';
import FormPayment from '../../components/FormPayment';
import Total from '../../components/Total';
import Button from '../../components/Button';

function Payment() {
  const history = useHistory();
  const cartContext = useContext(CartContext);
  const cardContext = useContext(CardContext);

  useEffect(() => {
    if (!cartContext) {
      history.push("/cart")
    }
  }, [cartContext, history]);

  const goToSuccess = () => {
    if(cardContext.card.valid){
      history.push("/success")
    } else{
      alert('dados inválidos')
    }
  }
  return (
    <>
      <Header activePayment={true} />
      <ContainerContent>
        <Section title={'cartão de crédito'} component={<FormPayment />}></Section>
        <Total/>
        <Button text={"finalizar o pedido"} buttonAction={goToSuccess}></Button>
      </ContainerContent>

    </>

  );
}
export default Payment;