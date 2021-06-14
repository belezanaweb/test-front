import React from 'react'
import PropTypes from 'prop-types'

import Card from '../Card'

import * as S from './styles'

const ConfirmationInfoCard = ({ creditCardNumber, name, expirationDate }) => (
  <Card title="PAGAMENTO">
    <S.Text>{creditCardNumber}</S.Text>
    <S.Text>{name}</S.Text>
    <S.Text>{expirationDate}</S.Text>
  </Card>
)

ConfirmationInfoCard.propTypes = {
  creditCardNumber: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  expirationDate: PropTypes.string.isRequired
}

export default ConfirmationInfoCard
