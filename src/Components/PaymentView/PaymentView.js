import React, { useContext } from 'react'

import DataContext from '../../Store/DataContext'
import './PaymentView.css'

const PaymentView = () => {
  const context = useContext(DataContext)
  const pay = context.state?.payments || []
  return (
    <div className="PaymentView">
      <span>****.****.****.{pay?.cardNumber?.substr(-4)}</span>
      <span>{pay?.cardName?.toUpperCase()}</span>
      <span>{pay?.cardValidate}</span>
    </div>
  )
}

export default PaymentView
