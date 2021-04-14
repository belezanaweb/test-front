import React from 'react'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
100%{
    transform: rotate(360deg);
}

`

const Load = styled.div`
  width: 200px;
  height: 200px;
  border: 5px solid orange;
  border-top-color: grey;
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
`

function Loading() {
  return <Load />
}

export default Loading
