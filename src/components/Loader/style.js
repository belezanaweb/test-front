import styled from 'styled-components'
import theme from 'theme'

export const StyledLoader = styled.div`
  position: relative;
  width: 10rem;
  height: 10rem;
  display: flex;
  margin: auto;
  margin-top: 1rem;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 8rem;
    height: 8rem;
    margin: 6px;
    border: .7rem solid ${theme.primary};
    border-radius: 50%;
    animation: loader 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${theme.primary} transparent transparent transparent;
  }

  div:nth-child(1) {
    animation-delay: -0.45s;
  }

  div:nth-child(2) {
    animation-delay: -0.3s;
  }

  div:nth-child(3) {

    animation-delay: -0.15s;
  }

@keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`
