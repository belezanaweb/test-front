import styled from 'styled-components'

import { Transition } from '../../../styles/Helpers'

export const StyledButton = styled.button`
  ${Transition};

  width: 100%;
  height: 3.75rem;

  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius.default};

  font-size: ${({ theme }) => theme.fontSize.button};
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 1.5rem;

  text-align: center;
  text-transform: uppercase;

  color: ${({ theme }) => theme.color.text.button.primary};
  background-color: ${({ theme }) => theme.color.background.button.primary};

  box-shadow: inset 0 -3px 0 0 #d45a00, 0 2px 4px 0 rgba(0, 0, 0, 0.25);

  cursor: pointer;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.color.background.button.primaryHovered};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
