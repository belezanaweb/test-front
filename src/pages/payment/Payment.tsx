import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Paper } from '../../components/atoms'
import { BagDetails } from '../../components/molecules'
import { BagContext } from '../../contexts/BagContext'
import { HeaderContext } from '../../contexts/HeaderContext'

export const Payment = () => {
  const { setHeaderPosition } = useContext(HeaderContext)
  const bag = useContext(BagContext)
  const navigate = useNavigate()

  useEffect(() => {
    setHeaderPosition(1)
  }, [setHeaderPosition])

  return (
    <>
      <Paper title="cartão de crédito">
        <input />
      </Paper>
      {bag && <BagDetails bag={bag} />}
      <Button onClick={() => navigate('/confirmation')}>finalizar o pedido</Button>
    </>
  )
}
