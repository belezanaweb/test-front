import styled from 'styled-components/macro'

import { IStyledStep } from './types'

export const Steps = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 1.2rem 2.5rem;
`

export const Step =
  styled.li <
  IStyledStep >
  `
  color: ${({ isActive, theme }) => (isActive ? theme.colors.primaryLight : theme.colors.base)};
  font-size: 1.3rem;
  font-weight: bold;
  transition: color 0.2s ease 0s;
  text-transform: uppercase;
`
