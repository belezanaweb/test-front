import React from 'react'

import Layout from '../Layout'
import { Section, CartList } from '../../components'

function Cart() {
  return (
    <Layout>
      <Section title="Produtos">
        <CartList />
      </Section>
    </Layout>
  )
}

export default Cart
