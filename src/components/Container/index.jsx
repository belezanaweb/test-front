import React from 'react'
import { StyledDiv } from './styled'

export default function Container(props) {
  return <StyledDiv>{props.children}</StyledDiv>
}
