import React from 'react'

export const Value = React.memo(({ children, currency, digits, ...props }) => {
  const parsedValue = normalizeMoneyValue(children, currency, digits)

  return <span {...props}>{parsedValue}</span>
})

export const normalizeMoneyValue = (value, currency = 'BRL', minimumFractionDigits = 2) => {
  /* istanbul ignore else */
  if (currency) {
    return (+value).toLocaleString('pt-BR', {
      minimumFractionDigits,
      style: 'currency',
      currency
    })
  }

  return (+value).toLocaleString('pt-BR', {
    minimumFractionDigits
  })
}

Value.defaultProps = {
  currency: 'BRL',
  digits: 2
}
