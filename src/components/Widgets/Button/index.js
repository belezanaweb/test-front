import React from 'react'
import PropTypes from 'prop-types'
import { CustomButton } from './style'

/*
    Component for Button
    Props:
    textButton - Text displayed on the button
    onClick - Function respective onClick for button
*/

const Button = (props) => {
  return (
    <>
      <CustomButton onClick={props.onClick}>{props.textButton}</CustomButton>
    </>
  )
}

Button.prototype = {
  textButton: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default Button
