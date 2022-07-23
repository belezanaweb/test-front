import React from 'react'
import loadable from '@loadable/component'
import { Section } from './style'
import { api } from '../../services/api'
import { DataContext } from '../../context'

const Header = loadable(() => import('../../components/Header'), {
  resolveComponent: (components) => components.Header
})

const CartItems = loadable(() => import('../../components/CartItems'), {
  resolveComponent: (components) => components.CartItems
})

const CartPrice = loadable(() => import('../../components/CartPrice'), {
  resolveComponent: (components) => components.CartPrice
})

const Button = loadable(() => import('../../components/Button'), {
  resolveComponent: (components) => components.Button
})

export const Cart = () => {
  const [products, setProducts] = React.useContext(DataContext)
  const [cartPrice, setCartPrice] = React.useState(null)

  React.useEffect(() => {
    const getProducts = async () => {
      const res = await api.get('5b15c4923100004a006f3c07')
      const data = res.data
      setProducts(data)
    }
    getProducts()
  }, [])

  return (
    <>
      <Header />
      <Section>
        <CartItems products={products.items} />
      </Section>
      <Section>
        <CartPrice cartPrice={products} />
      </Section>
      <Section>
        <Button path={'/payment'} text={'Seguir para o pagamento'} />
      </Section>
      <br />
    </>
  )
}
