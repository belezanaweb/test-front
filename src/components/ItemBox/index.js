import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './styles'

const ItemBox = ({ children, boxHeight }) => <Container boxHeight={boxHeight}>{children}</Container>

ItemBox.propTypes = {
  boxHeight: PropTypes.number.isRequired
}

export default ItemBox
