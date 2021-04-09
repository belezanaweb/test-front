import React from 'react'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`
const dash = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dashoffset: -125px;
  }
`

const Svg = styled.svg`
  width: 3.75em;
  transform-origin: center;
  animation: ${rotate} 2s linear infinite;
`
const Circle = styled.circle`
  fill: none;
  stroke: #ff7800;
  stroke-width: 2;
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: ${dash} 1.5s ease-in-out infinite;
`

const Loading = () => {
  return (
    <Svg viewBox="25 25 50 50">
      <Circle cx="50" cy="50" r="20"></Circle>
    </Svg>
  )
}

export default Loading
