import styled, { keyframes } from 'styled-components'

import loader from '../../assets/img/loader.svg'

const spin = keyframes`
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export const Icon = styled.span`
  animation: ${spin} 2s 1s infinite;

  &::before {
    display: block;
    width: 40px;
    height: 40px;

    content: url(${loader});
  }
`
