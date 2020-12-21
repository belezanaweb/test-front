import React from 'react'
import { useSelector } from 'react-redux'
import formatCurrency from '../../utils/formatCurrency'

import * as S from './style'

const App = () => {
  const {
    data: { subTotal, shippingTotal, discount, total }
  } = useSelector((e) => e.products)

  const _subTotal = formatCurrency(subTotal)
  const _shippingTotal = formatCurrency(shippingTotal)
  const _discount = formatCurrency(discount)
  const _total = formatCurrency(total)

  return (
    <section>
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
    </section>
  )
}

export default App
