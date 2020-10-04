import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';

import { Products, PurchaseInfo } from '../components';
import { RootCSS, SuccessCSS } from '../styles';

function Success({ purchase }) {

  const { Container, Title, Flex } = RootCSS;
  const { Content, CreditCard, Done } = SuccessCSS;
  const cardInfo = JSON.parse(sessionStorage.getItem('bnwnumber'));

  return (
    <Container>
      { !purchase.products && <Redirect to="/" /> }
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
                cardInfo &&
                <CreditCard>
                  <p>{cardInfo.last}</p>
                  <p>{cardInfo.name}</p>
                  <p>{cardInfo.date}</p>
                </CreditCard>
              }
              <Title>Produtos</Title>
              <Products items={purchase.products} />
            </Content>

            <PurchaseInfo info={purchase.info} />

          </Flex>
        </Fragment>
      }
    </Container>
  )
}

export default Success;
