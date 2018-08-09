import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #222;
  height: 190px;
  padding: 20px;
  color: white;
`

export const Logo = styled.img`
  height: 80px;

  animation: ${spin} 20s infinite linear;
`

export const Title = styled.h1`
  margin-top: 16px;
  margin-bottom: 16px;
  font-size: 1.5em;
`
