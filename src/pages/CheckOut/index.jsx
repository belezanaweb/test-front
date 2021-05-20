import { Header } from 'components/Header'
import React from 'react'
import { useParams } from 'react-router'

import Cart from 'containers/Cart'

const Checkout = () => {
  const { step } = useParams()
  return (
    <React.Fragment>
      <Header step={Number(step)} />
      <Cart />
    </React.Fragment>
  )
}

export default Checkout
