import React from 'react'

/**
 * Helpers
 */
// import { redirect } from '../../helpers'

/**
 * Styles
 */
import { Wrapper, Input } from './styles'

const InputComponent = ({ text, ...props }) => {
  return (
    <Wrapper>
      <Input {...props} />
    </Wrapper>
  )
}

export default InputComponent
