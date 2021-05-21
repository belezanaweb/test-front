import React from 'react'
import PropTypes from 'prop-types'
import { cardValuesData } from 'constants/data/components/cardValues'

import * as S from './styled'
import { convertMoney } from 'utils/convertMoney'

export const CardValues = ({ prices: { shippingTotal, subTotal, total, discount } }) => {
  return (
    <S.CardValuesWrapper>
      <S.CardValuesItem>
        <S.CardValuesText>{cardValuesData.subTotal}</S.CardValuesText>
        <S.CardValuesText>{convertMoney(subTotal)}</S.CardValuesText>
      </S.CardValuesItem>
      <S.CardValuesItem>
        <S.CardValuesText>{cardValuesData.shippingTotal}</S.CardValuesText>
        <S.CardValuesText>{convertMoney(shippingTotal)}</S.CardValuesText>
      </S.CardValuesItem>
      <S.CardValuesItem>
        <S.CardValuesText discount>{cardValuesData.discount}</S.CardValuesText>
        <S.CardValuesText discount>- {convertMoney(discount)}</S.CardValuesText>
      </S.CardValuesItem>
      <S.CardValuesItem>
        <S.CardValuesText total>{cardValuesData.total}</S.CardValuesText>
        <S.CardValuesText total>{convertMoney(total)}</S.CardValuesText>
      </S.CardValuesItem>
    </S.CardValuesWrapper>
  )
}

CardValues.propTypes = {
  prices: PropTypes.shape({
    shippingTotal: PropTypes.number.isRequired,
    subTotal: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired
  })
}
