import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Subtitle from '../../components/Subtitle/Subtitle'
import TotalCard from '../../components/TotalCard/TotalCard'

const ConfirmationPage = () => {
  const [cart, setCart] = useState()

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')))
  }, [])

  return (
    <div>
      <Header />
      <Subtitle text="PAGAMENTO" />
      <Subtitle text="PRODUTOS" />
      {cart && (
        <TotalCard
          subTotal={cart.subTotal}
          shippingTotal={cart.shippingTotal}
          discount={cart.discount}
          total={cart.total}
        />
      )}
    </div>
  )
}

export default ConfirmationPage
