import React from 'react'
import Success from '../../components/Success'

// import { useCartDetails } from '../../hooks/useCartDetails'

export function Cart() {
  // const { discount, shippingTotal, subTotal, total } = useCartDetails()
  //  const product = items?.[0]?.product
  return (
    <div
      style={{
        justifyContent: 'center',
        height: '100vh',
        alignItems: 'center',
        width: '100%'
      }}
    >
      <Success />
    </div>
  )
}
