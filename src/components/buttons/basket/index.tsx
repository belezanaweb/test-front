import React from 'react';
import Button from '../default'
import { useBasket } from '../../../services/basket/hooks';
import { useNavigate } from 'react-router-dom';

const ButtonNextStepPayment: React.FC = () => {
  const { basket } = useBasket();
  const navigate = useNavigate()
  return !!basket ? (
    <Button onClick={()=> navigate('/payment')}>SEGUIR PARA O PAGAMENTO</Button>
  ) : null;
};


export default ButtonNextStepPayment;