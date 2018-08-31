import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Box from '../components/Box';

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--color-orange-1);

  i {
    font-size: 3rem;
    letter-space: -1px;
    border: 2px solid var(--color-orange-1);
    padding: 1rem;
    border-radius: 100%;
    margin-bottom: 1rem;
  }

  span {
    font-size: 2rem;
    text-transform: uppercase;
  }
`

const PaymentDetils = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  font-size: 1.4rem;
`

const ConfirmationContainer = ({
  location,
}) => (
  <Fragment>
    <IconContainer >
      <i className='fa fa-check' aria-hidden="true"></i>
      <span>compra efetuada com sucesso</span>
    </IconContainer>
    <Box title='pagamento'>
      <PaymentDetils>
        <span>//todo: pegar as informacoes vindo da rota ao inves do state</span>
        {/* <span>{location.state.cardNumber.slice(0,-4).replace(/\d/g, '*')} {location.state.cardNumber.slice(-4)}</span>
        <span>{location.state.cardName}</span>
        <span>{location.state.cardDate}</span> */}
      </PaymentDetils>
    </Box>
  </Fragment>
);

export default withRouter(ConfirmationContainer);
