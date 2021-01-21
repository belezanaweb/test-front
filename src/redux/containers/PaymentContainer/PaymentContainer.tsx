import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { save } from '../../modules/payment/actions'
import { IPayment } from '../../modules/payment/types/IState'
import Payment from '../../../screens/Payment'

const PaymentContainer = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const handleSubmit = (formData: IPayment) => {
    dispatch(save(formData))
    history.push('/summary')
  }

  return <Payment onSubmit={handleSubmit} />
}

export default PaymentContainer
