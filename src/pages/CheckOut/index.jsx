import { Header } from 'components/Header'
import React from 'react'
import { useParams } from 'react-router'

import Bag from 'containers/Bag'

const Checkout = () => {
  const { step } = useParams()
  return (
    <React.Fragment>
      <Header step={Number(step)} />
      <Bag />
    </React.Fragment>
  )
}

export default Checkout
