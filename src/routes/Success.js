import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';

import { Products, PurchaseInfo } from '../components';
import { RootCSS, SuccessCSS } from '../styles';

function Success({ purchase, location }) {

  const { Container, Title, Flex } = RootCSS;
  const { Content, CreditCard, Done } = SuccessCSS;

  return (
    <Container>
      {
        purchase.products &&
        <Fragment>
          <Done>
            <img src="/images/success.png" alt="Compra efetuada"/>
            <p>Compra Efetuada com sucesso</p>
          </Done>

          <Flex>

            <Content>
              <Title>Pagamento</Title>
              {
                location.state.cardInfo &&
                <CreditCard>
                  <p>{location.state.cardInfo.last}</p>
                  <p>{location.state.cardInfo.name}</p>
                  <p>{location.state.cardInfo.date}</p>
                </CreditCard>
              }
              <Title>Produtos</Title>
              <Products items={purchase.products} />
            </Content>

            <PurchaseInfo info={purchase.info} />

          </Flex>
        </Fragment>
      }
      { !purchase.products && <Redirect to="/" /> }
    </Container>
  )
}

export default Success;
