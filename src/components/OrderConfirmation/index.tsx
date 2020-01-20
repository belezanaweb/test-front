import React from 'react'
import { OrderConfirmationStyle } from './style'

const OrderConfirmation: React.FC = () => {
  return (
    <OrderConfirmationStyle>
      <div className="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
          viewBox="0 0 24 24"
        >
          <path d="M21 6.285L9.84 19.018 3 13l1.319-1.49 5.341 4.686L19.525 5 21 6.285z" />
        </svg>
      </div>
      <h3>Compra efetuada com sucesso</h3>
    </OrderConfirmationStyle>
  )
}

export default OrderConfirmation
