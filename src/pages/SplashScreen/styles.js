import styled, { keyframes } from "styled-components"

export const LogoSpin = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`

export const Container = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  img{
    animation: ${LogoSpin} infinite 20s linear;
    height: 40vmin;
    pointer-events: none;
  }
`

