import React from 'react'
import { usePayment } from '../../context/PaymentProvider';

function Payment(props) {
  const { setPaymentData } = usePayment();
  const handleChange = (e) => {
    setPaymentData(e.target.value)
  }
  
  return (
    <div>
      <input type="text" onChange={handleChange}/>
    </div>
  )
}

export default Payment

