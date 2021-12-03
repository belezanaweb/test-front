import React from 'react'
import { StyledButton } from './styled'
import PropTypes from 'prop-types'

Button.propTypes = {
  block: PropTypes.bool
}

Button.defaultProps = {
  block: false
}

export default function Button(props) {
  return <StyledButton {...props}>{props.children}</StyledButton>
}
