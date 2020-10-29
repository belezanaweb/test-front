import React from 'react'
import PropTypes from 'prop-types'
import { ButtonContainer, Text } from './button.style'

const Button = (props) => {
  const { children } = props

  return (
    <ButtonContainer {...props}>
      <Text>{children}</Text>
    </ButtonContainer>
  )
}

Button.defaultProps = {
  children: '',
  onClick: () => {}
}

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
