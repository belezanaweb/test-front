import React from 'react'
import PropTypes from 'prop-types'

import { Container, Title, Value } from './styles'

const Detail = ({ title, value, isHighlight, isBold }) => (
  <Container isHighlight={isHighlight} isBold={isBold}>
    <Title>{title}</Title>
    <Value>{value}</Value>
  </Container>
)

Detail.defaultProps = {
  isHighlight: false,
  isBold: false
}

Detail.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isHighlight: PropTypes.boolean,
  isBold: PropTypes.boolean
}

export default Detail
