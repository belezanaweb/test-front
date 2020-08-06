import React from 'react'
import { usePayment } from '../../context/PaymentProvider';

import Resume from '../../components/Resume';
import { Title } from '../../components/Title';
import { Section } from '../../components/Section';
import { useOrder } from '../../context/OrderContext';
import { MainContent } from '../../components/MainContent';
import Button from '../../components/Button';

function Payment(props) {
  const { setPaymentData } = usePayment();
  const { loading, order } = useOrder();
  const handleChange = (e) => {
    setPaymentData(e.target.value)
  }

  const handleSubmit = () => {

  }
  
  return (
<Section>
  {loading 
    ? <span> carregando... </span>
    : (
      <>
        <MainContent>
          <Title> Cartão de crédito </Title>


        </ MainContent> 
        <Resume data={order}>
          <Button onClick={handleSubmit}> FINALIZAR O PEDIDO </Button>
        </Resume>
      </>
    )}
    </Section>
  )
}

export default Payment


