import React from 'react'
import { ButtonStyle } from './style'

export const Button = props => {
  return <ButtonStyle {...props}>{props.children}</ButtonStyle>
}
