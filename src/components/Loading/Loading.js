import React from 'react'
import { keyframes } from '@emotion/core'
import styled from '@emotion/styled/macro'
import logo from './logo.svg'

const LoadingContainer = styled.div`
  align-items: center;
  background-color: #282c34;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  justify-content: center;
  min-height: 100vh;
  text-align: center;
`

const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const LoadingImage = styled.img`
  animation: ${logoSpin} infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
`

function Loading () {
  return (
    <LoadingContainer>
      <LoadingImage src={logo} alt="logo" />
    </LoadingContainer>
  )
}

export default Loading
