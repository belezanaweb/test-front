import styled from 'styled-components'

import check from '../../assets/img/check.svg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;

  border: 2px solid #ff7800;
  border-radius: 50%;

  &::before {
    content: url(${check});
  }
`

export const Text = styled.p`
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #ff7800;
`
