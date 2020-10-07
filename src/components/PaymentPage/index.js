import React from 'react'

function PaymentPage() {
  const infoCart = JSON.parse(window.localStorage.getItem('infoCart'))

  console.log(infoCart)
  return <div>CARTÃO DE CRÉDITO</div>
}

export default PaymentPage
