import React from 'react'
import BillingContextProvider from '../contexts/BillingContext'
import CheckoutLayout from '../layouts/CheckoutLayout'
import '../styles/globals.scss'


function Checkout({ Component, pageProps }: React.ComponentState) {
  return (
    <BillingContextProvider>
      <CheckoutLayout>
        <Component {...pageProps} />
      </CheckoutLayout>
    </BillingContextProvider>
  )
}

export default Checkout