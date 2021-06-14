import styled from 'styled-components'
import { device } from '../../styles/breakpoints'

export const Confirmation = styled.div`
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
      width: 100%;
      margin-bottom: var(--spacing-4);
    }

    > *:nth-child(3) {
      float: right;
    }

    > * {
      width: 40%;
      height: 100%;
      float: left;
      width: calc(50% - var(--spacing-4));
      margin: var(--spacing-2);
    }
  }
`
