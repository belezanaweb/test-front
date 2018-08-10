import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './styles'

const Detail = ({ value }) => <Container>{value}</Container>

Detail.propTypes = {
  value: PropTypes.string.isRequired
}

export default Detail
