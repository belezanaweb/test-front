import React, { useState, useEffect } from 'react'
import Header from 'components/Header'
import Button from 'components/Button'
import {
  Title,
  CartPage,
  ProductList,
  ProductDetails,
  Product,
  CartCheckout,
  CheckoutInfo
} from './style'
import { format } from 'utils'
import { cartService } from 'services'

function Cart() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetch() {
      const products = await cartService.getCart()
      setProducts(products.items);
    }
    fetch()
    return function () { };
  }, []);

  return (
    <>
      <Header></Header>
      <CartPage>
        <Title>Produtos</Title>
        <ProductList>
          {products.map(({ product }) => (
            <Product key={product.sku}>
              <img alt={product.name} src={product.imageObjects[0].small} />
              <ProductDetails>
                <p>{product.name}</p>
                <span>{format.currency(product.priceSpecification.price)}</span>
              </ProductDetails>
            </Product>
          ))}
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

export default Cart
