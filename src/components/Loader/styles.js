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
  padding-top: 30px;
  padding-bottom: 30px;
  min-height: ${props => (props.full ? '100vh' : '100%')};
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
