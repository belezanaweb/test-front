import React from 'react'
import PropTypes from 'prop-types'
import { CustomButton } from './style'

/*
    Component for Button
    Props:
    textButton - Text displayed on the button
*/

const Button = (props) => {
  return (
    <>
      <CustomButton>{props.textButton}</CustomButton>
    </>
  )
}

Button.prototype = {
  textButton: PropTypes.string.isRequired
}

export default Button
