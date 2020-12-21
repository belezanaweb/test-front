import { IMaskInput } from 'react-imask'
import styled, { css } from 'styled-components'

export const Label = styled.span`
  color: var(--text-secondary);
  font-weight: 700;
  line-height: 1.15em;
  margin-bottom: var(--spacing-xs);
`

export const Input = styled(IMaskInput)`
  border: 1px solid var(${({ isInvalid }) => (isInvalid ? '--danger' : '--border-color')});
  border-radius: var(--border-radius);
  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  color: var(--gray);
  font-size: var(--font-lg);
  line-height: 20px;
  outline: none;
  padding: var(--spacing);

  &:focus {
    border: 1px solid var(--purple);
    color: var(--text);
  }

  &::placeholder {
    color: var(--gray);
  }
`

export const ErrorMessage = styled.span`
  color: var(--danger);
  font-size: var(--font-sm);
  line-height: var(--font);
`

export const Wrapper = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  ${(p) =>
    p.isInvalid &&
    css`
      ${Input} {
        border: 1px solid var(--danger);
      }
    `}
`
