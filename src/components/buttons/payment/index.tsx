import React from 'react';
import Button from '../default'
import { useBasket } from '../../../services/basket/hooks';
import { useNavigate } from 'react-router-dom';

const ButtonNextStepBasket: React.FC = () => {
  const { basket } = useBasket();
  const navigate = useNavigate()
  return !!basket ? (
    <Button onClick={()=> navigate('/confirmation')}>FINALIZAR O PEDIDO</Button>
  ) : null;
};


export default ButtonNextStepBasket;