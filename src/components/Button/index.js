import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import { Container } from './styles'

const Button = ({ to, history, type, disabled, go, children }) => (
  <Container type={type} onClick={() => go && history.push(to)} disabled={disabled}>
    {children}
  </Container>
)

Button.defaultProps = {
  type: 'button',
  disabled: false
}

Button.propTypes = {
  to: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  go: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
}

export default withRouter(Button)
