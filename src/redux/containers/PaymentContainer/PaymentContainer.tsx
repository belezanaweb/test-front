import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { setData } from '../../../redux/ducks/creditCard'
import { RootState } from '../../store'
import Payment from '../../../pages/Payment'

export const PaymentContainer = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { data } = useSelector((state: RootState) => state.cart)

  const handleSubmit = async (values: any) => {
    await dispatch(setData(values))
    history.push('/sucesso')
  }

  return <Payment productData={data} handleSubmit={handleSubmit} />
}
