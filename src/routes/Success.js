import React from 'react';

import Products from '../components/Products';
import PurchaseInfo from '../components/PurchaseInfo';
import { Container, Title, Flex } from '../styles/Root';
import { Content, CreditCard, Done } from '../styles/Sucess';

function Success() {

  return (
    <Container>

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
          <Products />
        </Content>

        <PurchaseInfo />

      </Flex>

    </Container>
  )
}

export default Success;
