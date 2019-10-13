import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
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
import { handleAsyncReduxData } from 'utils/async.utils'
import { Types } from 'store/duck/cart'

function Cart() {
  const data = useSelector(state => state.cart.data)
  const dispatch = useDispatch()

  useEffect(() => {
    handleAsyncReduxData(
      cartService.getCart(),
      dispatch,
      {
        loadingActionName: Types.LOADING,
        errorActionName: Types.ERROR,
        successActionName: Types.SUCCESS,
      }
    )
  }, [])

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
