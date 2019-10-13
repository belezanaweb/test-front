import React, { Component } from 'react'
import Header from '../../components/Header'
import Button from '../../components/Button'
import Image from '../../components/ImageWrapper'
import {
  Title,
  CartPage,
  ProductList,
  ProductDetails,
  Product,
  CartCheckout,
  CheckoutInfo
} from './style'

class Cart extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <CartPage>
          <Title>Produtos</Title>
          <ProductList>
            <Product>
              <Image alt='Product' src='/product.test.png' width={65} height={65}></Image>
              <ProductDetails>
                <p>L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium</p>
                <span>R$ 225,90</span>
              </ProductDetails>
            </Product>
            <Product>
              <Image alt='Product' src='/product.test.png' width={65} height={65}></Image>
              <ProductDetails>
                <p>L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium</p>
                <span>R$ 225,90</span>
              </ProductDetails>
            </Product>
            <Product>
              <Image alt='Product' src='/product.test.png' width={65} height={65}></Image>
              <ProductDetails>
                <p>L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium</p>
                <span>R$ 225,90</span>
              </ProductDetails>
            </Product>
          </ProductList>

          <CartCheckout>
            <CheckoutInfo>
              <span>Produto</span>
              <span>R$ 624,80</span>
            </CheckoutInfo>
            <CheckoutInfo>
              <span>Frete</span>
              <span>R$ 5,30</span>
            </CheckoutInfo>
            <CheckoutInfo primary>
              <span>Desconto</span>
              <span>- R$ 30,00</span>
            </CheckoutInfo>
            <CheckoutInfo>
              <span>Total</span>
              <span>R$100,00</span>
            </CheckoutInfo>
          </CartCheckout>

          <Button>Seguir para o pagamento</Button>
        </CartPage>
      </>
    )
  }
}

export default Cart
