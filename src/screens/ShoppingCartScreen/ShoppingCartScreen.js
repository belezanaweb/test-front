import React, { useContext, useEffect } from 'react'
import GlobalStateContext from '../../global/GlobalStateContext'
import PriceCard from '../../components/PriceCard/PriceCard'
import Loading from '../../components/Loading'
import { useHistory } from 'react-router'
import { goToPayment } from '../../router/coordinator'
import { Button, CartInfoContainer, Title } from './styles'
import ProductsGrid from '../../components/ProductsGrid/ProductsGrid'

const ShoppingCartScreen = () => {
  const history = useHistory()
  const { cart, products, getProducts } = useContext(GlobalStateContext)

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div>
      <Title>PRODUTOS</Title>
      {cart ? (
        <CartInfoContainer>
          <ProductsGrid products={products} />
          <PriceCard
            subTotal={cart.subTotal}
            shipping={cart.shippingTotal}
            discount={cart.discount}
          />
          <Button onClick={() => goToPayment(history)}>SEGUIR PARA PAGAMENTO</Button>
        </CartInfoContainer>
      ) : (
        <Loading />
      )}
    </div>
  )
}

export default ShoppingCartScreen
