import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { save } from '../../modules/payment/actions'
import { IPayment } from '../../modules/payment/types/IState'
import { RootState } from '../../store'
import Payment from '../../../screens/Payment'

const PaymentContainer = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const data = useSelector((state: RootState) => state.cart)

  const handleSubmit = (formData: IPayment) => {
    console.log(formData)
    dispatch(save(formData))
    history.push('/summary')
  }

  return <Payment productData={data} onSubmit={handleSubmit} />
}

export default PaymentContainer
