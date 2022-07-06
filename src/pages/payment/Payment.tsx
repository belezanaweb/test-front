import React, { useContext } from 'react'
import { Paper } from '../../components/atoms'
import { BagDetails } from '../../components/molecules'
import { BagContext } from '../../contexts/BagContext'

export const Payment = () => {
  const bag = useContext(BagContext)

  return (
    <>
      <Paper title="cartão de crédito">
        <input />
      </Paper>
      {bag && <BagDetails bag={bag} />}
    </>
  )
}
