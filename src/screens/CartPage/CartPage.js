import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import Header from '../../components/Header/Header'
import NextStepButton from '../../components/NextStepButton/NextStepButton'
import ProductCard from '../../components/ProductCard/ProductCard'
import Subtitle from '../../components/Subtitle/Subtitle'
import TotalCard from '../../components/TotalCard/TotalCard'
import { goToPaymentPage } from '../../router/Coordinator'
import { ProductsContainer } from './styles'

const CartPage = () => {
  const history = useHistory()
  const [cart, setCart] = useState()

  useEffect(() => {
    axios
      .get('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
      .then((res) => {
        localStorage.setItem('cart', JSON.stringify(res.data))
        setCart(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <Header />
      <Subtitle text="PRODUTOS" />
      <ProductsContainer>
        {cart &&
          cart.items.map((item) => {
            return (
              <ProductCard
                key={item.product.sku}
                thumbnail={item.product.imageObjects[0].thumbnail}
                name={item.product.name}
                price={item.product.priceSpecification.price}
              />
            )
          })}
      </ProductsContainer>
      {cart && (
        <TotalCard
          subTotal={cart.subTotal}
          shippingTotal={cart.shippingTotal}
          discount={cart.discount}
          total={cart.total}
        />
      )}
      <NextStepButton text="SEGUIR PARA O PAGAMENTO" onClick={() => goToPaymentPage(history)} />
    </div>
  )
}

export default CartPage
