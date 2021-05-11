import React from 'react'
import PropTypes from 'prop-types'

import { maskMoney } from '../../utils/validation'

import { Container, Info, Text, InfoTotal } from './styles.css'

const TotalInfos = ({ discount, shippingTotal, subTotal, total }) => {
  return (
    <Container>
      <Info>
        <Text>PRODUTOS</Text>
        <Text>{maskMoney(subTotal)}</Text>
      </Info>
      <Info>
        <Text>FRETE</Text>
        <Text>{maskMoney(shippingTotal)}</Text>
      </Info>
      <Info>
        <Text discount>DESCONTO</Text>
        <Text discount>- {maskMoney(discount)}</Text>
      </Info>
      <InfoTotal>
        <Text total>TOTAL</Text>
        <Text total>{maskMoney(total)}</Text>
      </InfoTotal>
    </Container>
  )
}

TotalInfos.propTypes = {
  discount: PropTypes.number.isRequired,
  shippingTotal: PropTypes.number.isRequired,
  subTotal: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
}

TotalInfos.defaultProps = {
  discount: 0,
  shippingTotal: 0,
  subTotal: 0,
  total: 0
}

export default TotalInfos
