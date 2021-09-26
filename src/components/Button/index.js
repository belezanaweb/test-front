import React from 'react'

/**
 * Helpers
 */
// import { redirect } from '../../helpers'

/**
 * Styles
 */
import { Wrapper, Button } from './styles'

const ButtonComponent = ({ text, ...props }) => {
  return (
    <Wrapper>
      <Button {...props}>{text}</Button>
    </Wrapper>
  )
}

export default ButtonComponent
