import React from 'react'
import CheckoutLayout from '../layouts/CheckoutLayout'
import '../styles/globals.scss'


function Checkout({ Component, pageProps }:React.ComponentState) {
  return (
    <CheckoutLayout>
      <Component {...pageProps} />
    </CheckoutLayout>
  )
}

export default Checkout