import React, { Fragment } from 'react';

import { Products, PurchaseInfo } from '../components';
import { RootCSS, SuccessCSS } from '../styles';

function Success({ purchase }) {

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
              <CreditCard>
                <p>****.****.****.1234</p>
                <p>JOSÉ DA SILVA</p>
                <p>05/2019</p>
              </CreditCard>
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
