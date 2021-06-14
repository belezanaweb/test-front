import styled from 'styled-components'
import { device } from '../../styles/breakpoints'

export const Cart = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
  padding: var(--spacing-2) 0;

  @media ${device.tablet} {
    padding: var(--spacing-4) 0;
  }

  @media ${device.desktop} {
    flex-direction: row;
  }
`

export const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);

  @media ${device.desktop} {
    min-width: 40%;
    margin-top: var(--spacing-4);
  }
`
