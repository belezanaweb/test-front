import styled from 'styled-components/macro'
import { Field, FieldProps } from 'formik'

export const Input = styled(Field)<FieldProps>`
  background-color: ${({ theme }) => theme.colors.baseLighten};
  border-radius: 0.3rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.auxiliary};
  box-shadow: inset 0 0.1rem 0.2rem 0 rgba(0, 0, 0, 0.2);
  padding: 1rem;
  color: ${({ theme }) => theme.colors.baseDarken};
  transition: border 0.2s ease-out;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.auxiliaryLighten};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.focus};
    outline: 0;
  }

  ${({ theme, error }) => error && `border: 1px solid ${theme.colors.error};`}
`
