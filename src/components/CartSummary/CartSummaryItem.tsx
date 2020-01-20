import React from 'react'

interface Props {
  title: string
  value?: Number
  discount?: boolean
}

const CartSummaryItem: React.FC<Props> = ({ title, value, discount }) => {
  const formatMoney = (value?: Number) => {
    if (value) return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  return (
    <div className={`summary-item ${discount && 'summary-item--discount'}`}>
      <span className="item-name">{title}</span>
      <span className="item-value">
        {discount && '- '}
        {formatMoney(value)}
      </span>
    </div>
  )
}

export default CartSummaryItem
