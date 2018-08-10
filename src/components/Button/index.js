import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import { Container } from './styles'

const Button = ({ to, history, children }) => (
  <Container onClick={() => history.push(to)}>{children}</Container>
)

Button.propTypes = {
  to: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired,
  children: PropTypes.node.isRequired
}

export default withRouter(Button)
