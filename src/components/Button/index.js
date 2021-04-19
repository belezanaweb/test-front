import React from 'react'
import { StyledButton, StyledError } from './styled'

export const Button = (props) => {
  return (
    <>
      <StyledButton onSubmit={props.onSubmit} type={props.type} onClick={props.onClick}>
        <StyledError to={props.link}>{props.text}</StyledError>
      </StyledButton>
    </>
  )
}
