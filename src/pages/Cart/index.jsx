import React from 'react'
import loadable from '@loadable/component'
import { Section } from './style'
import { api } from '../../services/api'

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
  const [products, setProducts] = React.useState([])
  const [cartPrice, setCartPrice] = React.useState(null)

  React.useEffect(() => {
    const getProducts = async () => {
      const res = await api.get('5b15c4923100004a006f3c07')
      console.log(res.data) //apagar depois
      setProducts(res.data.items)
      setCartPrice({
        discount: res.data.discount,
        shippingTotal: res.data.shippingTotal,
        subTotal: res.data.subTotal,
        total: res.data.total
      })
    }
    getProducts()
  }, [])

  return (
    <>
      <Header />
      <Section>
        <CartItems products={products} />
      </Section>
      <Section>
        <CartPrice cartPrice={cartPrice} />
      </Section>
      <Section>
        <Button path={'/payment'} text={'Seguir para o pagamento'} />
      </Section>
      <br />
    </>
  )
}
