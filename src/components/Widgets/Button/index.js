import React from 'react'
import { Button } from './style'

/*
    Component for Button
    Props:
    textButton - Text displayed on the button
*/

const Button = (textButton) => {
  return (
    <>
      <Button>{textButton}</Button>
    </>
  )
}

Button.prototype = {
  textButton: PropTypes.string.isRequired
}

export default Button
