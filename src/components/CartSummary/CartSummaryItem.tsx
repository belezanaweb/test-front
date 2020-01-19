import React from 'react'

interface Props {
  title: string
  value?: Number
}

const CartSummaryItem: React.FC<Props> = ({ title, value }) => {
  const formatMoney = (value?: Number) => {
    if (value) return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  return (
    <div className="summary-item summary-item--discount">
      <span className="item-name">{title}</span>
      <span className="item-value">{formatMoney(value)}</span>
    </div>
  )
}

export default CartSummaryItem
