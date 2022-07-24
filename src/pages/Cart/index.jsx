import React from 'react'
import { Section } from './style'
import { api } from '../../services/api'
import { DataContext } from '../../context'
import { Header } from '../../components/Header'
import { CartItems } from '../../components/CartItems'
import { CartPrice } from '../../components/CartPrice'
import { Button } from '../../components/Button'

export const Cart = () => {
  const [products, setProducts] = React.useContext(DataContext)

  React.useEffect(() => {
    const getProducts = async () => {
      const res = await api.get('5b15c4923100004a006f3c07')
      const data = res.data
      setProducts(data)
    }
    getProducts()
  })

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
