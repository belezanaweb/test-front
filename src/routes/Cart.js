import React from 'react';
import { Container, Button, CartStyle } from '../components/styled';

function Cart() {

  const {
    Title,
    Flex,
    Products,
    List,
    Product,
    Info,
    Image,
    Description,
    Price,
    Purchase,
    PurchaseInfo,
    PurchaseDiscount,
    PurchaseTotal
  } = CartStyle;

  return (
    <Container>
      <Title>Produtos</Title>

      <Flex>
        <Products>
          <List>
            <Product>
              <Image src="https://via.placeholder.com/65" />
              <Info>
                <Description>L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium</Description>
                <Price>R$ 225,90</Price>
              </Info>
            </Product>

            <Product>
              <Image src="https://via.placeholder.com/65" />
              <Info>
                <Description>L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium</Description>
                <Price>R$ 225,90</Price>
              </Info>
            </Product>

            <Product>
              <Image src="https://via.placeholder.com/65" />
              <Info>
                <Description>L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium</Description>
                <Price>R$ 225,90</Price>
              </Info>
            </Product>
          </List>
        </Products>

        <div>
          <Purchase>
            <PurchaseInfo>
              <p>PRODUTOS</p>
              <p>R$ 624,80</p>
            </PurchaseInfo>
            <PurchaseInfo>
              <p>FRETE</p>
              <p>R$ 5,30</p>
            </PurchaseInfo>
            <PurchaseDiscount>
              <p>DESCONTO</p>
              <p>- R$ 30,00</p>
            </PurchaseDiscount>
            <PurchaseTotal>
              <p>TOTAL</p>
              <p>R$ 600,10</p>
            </PurchaseTotal>
          </Purchase>

          <Button>Seguir para o pagamento</Button>
        </div>
      </Flex>

    </Container>
  )
}

export default Cart;
