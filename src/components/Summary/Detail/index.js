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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isHighlight: PropTypes.bool,
  isBold: PropTypes.bool
}

export default Detail
