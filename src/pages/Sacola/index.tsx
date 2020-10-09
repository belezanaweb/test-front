import React from 'react';
import {
  Container,
  Content,
  ProductImage,
  ProductItem,
  ProductName,
  Products,
  ProductInfo,
  ProductValue,
  Summary,
  SummaryItem,
  Title,
} from './styles';

const Sacola: React.FC = () => {
  return (
    <Container>
      <Title>Produtos</Title>

      <Content>
        <Products>
          <ProductItem>
            <ProductImage src="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png" />
            <ProductInfo>
              <ProductName>
                L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium
              </ProductName>
              <ProductValue>R$ 225,90</ProductValue>
            </ProductInfo>
          </ProductItem>
        </Products>

        <Summary>
          <SummaryItem>
            Produtos
            <span>R$ 624,80</span>
          </SummaryItem>
          <SummaryItem>
            Frete
            <span>R$ 5,30</span>
          </SummaryItem>
          <SummaryItem highlight>
            Desconto
            <span>R$ 30,00</span>
          </SummaryItem>
          <SummaryItem>
            Total
            <span>R$ 600,10</span>
          </SummaryItem>
        </Summary>
      </Content>
    </Container>
  );
};

export default Sacola;
