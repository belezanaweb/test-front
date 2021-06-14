import styled from 'styled-components'
import { device } from '../../styles/breakpoints'

export const Confirmation = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
  padding: var(--spacing-2) 0;
  max-width: 500px;
  margin: 0 auto;

  @media ${device.tablet} {
    padding-top: var(--spacing-4);
  }

  @media ${device.desktop} {
    padding-top: var(--spacing-6);
    gap: var(--spacing-6);
  }
`
