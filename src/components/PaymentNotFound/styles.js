import styled from 'styled-components'
import { device } from '../../styles/breakpoints'

export const PaymentNotFound = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: var(--spacing-4);
  gap: var(--spacing-4);
  width: 100%;
  max-width: 500px;
  margin: 0 auto;

  @media ${device.desktop} {
    padding-top: var(--spacing-8);
  }
`

export const Text = styled.h4`
  font-size: var(--font-size-lg);
  text-align: center;
  color: var(--colors-black);
`
