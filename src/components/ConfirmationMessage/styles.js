import styled from 'styled-components'
import { device } from '../../styles/breakpoints'

export const CheckIconWrapper = styled.span`
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  padding: var(--spacing-2);
  border-radius: 50%;
  border: 1px solid var(--colors-orange-200);

  @media ${device.tablet} {
    height: 60px;
    width: 60px;
    border: 2px solid var(--colors-orange-200);
  }

  @media ${device.desktop} {
    height: 90px;
    width: 90px;
    border: 2px solid var(--colors-orange-200);

    svg {
      transform: scale(1.5);
    }
  }
`

export const Text = styled.p`
  font-size: var(--font-size-md);
  color: var(--colors-orange-200);
  font-weight: bold;
  line-height: var(--line-height-md);

  @media ${device.desktop} {
    font-size: var(--font-size-lg);
  }
`

export const ConfirmationMessage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);

  @media ${device.desktop} {
    gap: var(--spacing-4);
  }
`
