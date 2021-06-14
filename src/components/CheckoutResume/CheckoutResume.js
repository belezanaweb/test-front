import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

const CheckoutResume = ({ productsPrice, freightPrice, discountPrice, totalPrice }) => (
  <S.CheckoutResume>
    <S.ProductResume>
      <S.Description>PRODUTOS</S.Description>
      <S.Price>{productsPrice}</S.Price>
    </S.ProductResume>
    <S.FreightResume>
      <S.Description>FRETE</S.Description>
      <S.Price>{freightPrice}</S.Price>
    </S.FreightResume>
    <S.DiscountResume>
      <S.Description>DESCONTOS</S.Description>
      <S.Price>{discountPrice}</S.Price>
    </S.DiscountResume>
    <S.TotalResume>
      <S.Description>TOTAL</S.Description>
      <S.Price>{totalPrice}</S.Price>
    </S.TotalResume>
  </S.CheckoutResume>
)

CheckoutResume.propTypes = {
  productsPrice: PropTypes.string,
  freightPrice: PropTypes.string,
  discountPrice: PropTypes.string,
  totalPrice: PropTypes.string
}

CheckoutResume.defaultProps = {
  productsPrice: 'R$ 00,00',
  freightPrice: 'R$ 00,00',
  discountPrice: 'R$ 00,00',
  totalPrice: 'R$ 00,00'
}

export default CheckoutResume
