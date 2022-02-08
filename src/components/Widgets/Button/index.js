import React from 'react'
import PropTypes from 'prop-types'
import { CustomButton } from './style'

/*
    Component for Button
    Props:
    textButton - Text displayed on the button
    onClick - Function respective onClick for button
    disable - Boolean for button activated
*/

const Button = (props) => {
  const { onClick, textButton, disabled } = props
  return (
    <>
      <CustomButton onClick={onClick} disabled={disabled}>
        {textButton}
      </CustomButton>
    </>
  )
}

Button.prototype = {
  textButton: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disable: PropTypes.bool.isRequired
}

export default Button
