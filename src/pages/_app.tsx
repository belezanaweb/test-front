import '../styles/globals.scss'
import React from 'react'
import BillingContextProvider from '../contexts/BillingContext'
import CheckoutLayout from '../layouts/CheckoutLayout'

function Checkout({ Component, pageProps }: React.ComponentState) {
  return (
    <BillingContextProvider>
      <Component {...pageProps} />
    </BillingContextProvider>
  )
}

export default Checkout