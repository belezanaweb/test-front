import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Button from '../../components/Button/Button'

const Payment = () => {
  return (
    <>
      <NavBar active="payment" />
      <Button form="form" label="FINALIZAR O PEDIDO" type="submit" />
    </>
  )
}

export default Payment
