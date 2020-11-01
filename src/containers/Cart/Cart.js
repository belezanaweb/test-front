import React, { useContext, useEffect, Suspense } from 'react'
import { useAsyncResource } from 'use-async-resource'
import { Link } from 'react-router-dom'
import { CartContext } from '../../store/CartStore'
import { Button } from '../../components/Button/Button'
import { ProductList } from '../../components/ProductList/ProductList'
import { PurchaseSummary } from '../../components/PurchaseSummary/PurchaseSummary'
import { Stepper } from '../../components/Stepper/Stepper'
import { Layout, LayoutGrid, LayoutAside } from '../../components/Layout/Layout'

const fetchCart = () =>
  fetch('http://www.mocky.io/v2/5b15c4923100004a006f3c07').then((res) => res.json())

const Cart = () => {
  const cartContext = useContext(CartContext)
  const [cartReader] = useAsyncResource(fetchCart, '')

  const data = cartReader()

  useEffect(() => {
    if (!cartContext.state.items) {
      cartContext.dispatch(data)
    }
  }, [cartContext, data])

  return (
    <Layout>
      <Stepper steps={steps} />
      <LayoutGrid>
        <Suspense fallback={<div>Carregando...</div>}>
          <ProductList />
          <LayoutAside>
            <PurchaseSummary />
            <Link to="/pagamento">
              <Button>Seguir para o pagamento</Button>
            </Link>
          </LayoutAside>
        </Suspense>
      </LayoutGrid>
    </Layout>
  )
}

const steps = [
  {
    active: true,
    title: 'Sacola'
  },
  {
    title: 'Pagamento'
  },
  {
    title: 'Confirmação'
  }
]

export default Cart
