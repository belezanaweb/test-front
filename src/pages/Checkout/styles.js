import styled from 'styled-components'
import { device } from '../../styles/breakpoints'

export const Checkout = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
  padding-top: var(--spacing-2);

  @media ${device.tablet} {
    padding-top: var(--spacing-4);
  }

  @media ${device.desktop} {
    display: block;

    > *:first-child {
      width: 60%;
      margin: 0 auto;
      float: left;
    }

    > * {
      width: calc(40% - var(--spacing-8));
      float: right;
      margin: var(--spacing-4);
    }

    > button {
      margin-top: 0;
    }
  }
`
