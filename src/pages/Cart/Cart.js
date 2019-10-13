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
import { cartService } from 'services'
import CartProduct from './CartProduct'
import { format } from 'utils'

function Cart() {
  const [data, setData] = useState({ items: [], shippingTotal: 0, subTotal: 0, total: 0, discount: 0 })

  useEffect(() => {
    async function fetch() {
      const data = await cartService.getCart()
      setData(data);
    }
    fetch()
  }, []);

  return (
    <>
      <Header></Header>
      <CartPage>
        <Title>Produtos</Title>
        <ProductList>
          {data.items.map(entry => {
            const product = new CartProduct(entry.product)
            return (
              <Product key={product.sku}>
                <img alt={product.name} src={product.imageUrl} />
                <ProductDetails>
                  <p>{product.name}</p>
                  <span>{product.priceFormated}</span>
                </ProductDetails>
              </Product>
            )
          })}
        </ProductList>

        <CartCheckout>
          <CheckoutInfo>
            <span>Produto</span>
            <span>{format.currency(data.subTotal)}</span>
          </CheckoutInfo>
          <CheckoutInfo>
            <span>Frete</span>
            <span>{format.currency(data.shippingTotal)}</span>
          </CheckoutInfo>
          <CheckoutInfo primary>
            <span>Desconto</span>
            <span>- {format.currency(data.discount)}</span>
          </CheckoutInfo>
          <CheckoutInfo>
            <span>Total</span>
            <span>{format.currency(data.total)}</span>
          </CheckoutInfo>
        </CartCheckout>

        <Button>Seguir para o pagamento</Button>
      </CartPage>
    </>
  )
}

export default Cart
