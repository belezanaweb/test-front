import React from 'react'
import { StyledButton } from './styled'

export const Button = (props) => {
  return (
    <>
      <StyledButton onSubmit={props.onSubmit} type={props.type} onClick={props.onClick}>
        {props.text}
      </StyledButton>
    </>
  )
}
