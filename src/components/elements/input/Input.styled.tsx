import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

import { Transition } from '../../../styles/Helpers'

type StyledInputProps = InputHTMLAttributes<any> & {
  invalid?: boolean
}

export const StyledInput =
  styled.input <
  StyledInputProps >
  `
  ${Transition};

  width: 100%;
  height: 2.8125rem;

  padding: 0.875rem 5.5rem 0.75rem 0.8125rem;

  border: 1px solid ${({ theme, invalid }) =>
    invalid ? theme.color.border.input.error : theme.color.border.input.primary};
  border-radius: ${({ theme }) => theme.borderRadius.default};

  font-size: ${({ theme }) => theme.fontSize.input};
  line-height: 1.1875rem;

  color: ${({ theme }) => theme.color.text.input.primary};
  background-color: ${({ theme }) => theme.color.background.input.primary};

  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);

  &::placeholder {
    color: ${({ theme, invalid }) =>
      invalid ? theme.color.text.input.primary : theme.color.text.input.placeholder};
  }

  &:focus:not(:disabled) {
    border-color: ${({ theme, invalid }) =>
      invalid ? theme.color.border.input.error : theme.color.border.input.focus};

    &::placeholder {
      color: ${({ theme }) => theme.color.text.input.primary};
    }
  }

  &:disabled {
    opacity: 0.6;
  }
`
