import React from 'react'
import { useSelector } from 'react-redux'
import * as S from './style'

const format = (() => {
  const f = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
  return (val = '') => f.format(val)
})()

const App = () => {
  const {
    data: { subTotal, shippingTotal, discount, total }
  } = useSelector((e) => e.products)

  const _subTotal = format(subTotal)
  const _shippingTotal = format(shippingTotal)
  const _discount = format(discount)
  const _total = format(total)

  return (
    <S.Ul>
      <S.Li>
        Produto <span>{_subTotal}</span>
      </S.Li>
      <S.Li>
        Frete <span>{_shippingTotal}</span>
      </S.Li>
      <S.Discount>
        Desconto <span>{!discount ? _discount : `- ${_discount}`}</span>
      </S.Discount>
      <S.Total>
        Total <span>{_total}</span>
      </S.Total>
    </S.Ul>
  )
}

export default App
