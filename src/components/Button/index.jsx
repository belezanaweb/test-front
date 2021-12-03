import React from 'react'
import PropTypes from 'prop-types'
import { StyledButton } from './styled'

Button.propTypes = {
  block: PropTypes.bool
}

Button.defaultProps = {
  block: false
}

export default function Button(props) {
  return <StyledButton {...props}>{props.children}</StyledButton>
}
