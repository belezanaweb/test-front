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

export const Cart = () => {
  const [products, setProducts] = React.useState([])

  React.useEffect(() => {
    const getProducts = async () => {
      const res = await api.get('5b15c4923100004a006f3c07')
      console.log(res.data.items)
      setProducts(res.data.items)
    }
    getProducts()
  }, [])

  return (
    <>
      <Header
        items={[
          {
            label: 'sacola',
            path: '/'
          },
          {
            label: 'pagamento',
            path: '/pagamento'
          },
          {
            label: 'confirmação',
            path: '/confirmacao'
          }
        ]}
      />
      <Section>
        <CartItems products={products} />
      </Section>
      <Section></Section>
    </>
  )
}
