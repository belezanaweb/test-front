import React from 'react'
import { StyledButton, StyledLink } from './styled'

const Button = (props) => {
  return (
    <>
      <StyledButton>
        <StyledLink to={props.link}>{props.text}</StyledLink>
      </StyledButton>
    </>
  )
}

export { Button }
