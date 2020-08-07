import React from 'react'

import { useOrder } from '../../context/OrderContext';

import ProductList from '../../components/ProductList';
import Resume from '../../components/Resume';
import { Section } from '../../components/Section';

import { MainContent } from '../../components/MainContent';
import PaymentInfo from '../../components/PaymentInfo';
import { Confirmation, Icon, Text, Content } from '../../components/PaymentInfo/style';
import { Title } from '../../components/Title';


function OrderPlace() {
  const { order, loading } = useOrder();
  return (
    <Section>
      {loading
        ? <span> carregando... </span>
        : (
          <>
            <Confirmation>
              <Icon src="/icon-confirmed.svg" />
              <Text> COMPRA EFETUADA COM SUCESSO </Text>
            </Confirmation>
            <MainContent>
              <Content>
                <Title> Pagamento </Title>
                <PaymentInfo />
              </ Content>
              <Content>
                <Title> Produtos </Title>
                <ProductList items={order?.items || []} />
              </ Content>
            </MainContent>
            <Resume data={order} />


          </>
        )}
    </Section>
  )
}

export default OrderPlace

