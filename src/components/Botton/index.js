import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import { Container } from './style'

const Button = ({ to, history, type, disabled, children }) => (
  <Container type={type} onClick={() => history.push(to)} disabled={disabled}>
    {children}
  </Container>
)

Button.defaultProps = {
  type: 'button',
  disabled: false
}

Button.propTypes = {
  to: PropTypes.string,
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired
}

export default withRouter(Button)