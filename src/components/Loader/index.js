import React from 'react'
import PropTypes from 'prop-types'

import { Container, Icon } from './styles'

const Loader = ({ full }) => (
  <Container full={full}>
    <Icon />
  </Container>
)

Loader.defaultProps = {
  full: false
}

Loader.propTypes = {
  full: PropTypes.bool
}

export default Loader
