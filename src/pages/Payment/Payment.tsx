import React from 'react'
import { useDispatch } from 'react-redux'

import { setData } from '../../redux/ducks/creditCard'

export const Payment = () => {
  const dispatch = useDispatch()

  const handleSubmit = () => {
    dispatch(
      setData({
        holder: 'Fulano de Tal',
        number: 92737321837183,
        expirationDate: new Date().getTime(),
        cvv: 234
      })
    )
  }

  return (
    <>
      <h1>Payment</h1>
      <button onClick={() => handleSubmit()}>Finalizar pedido</button>
    </>
  )
}
