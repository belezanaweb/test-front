import styled from 'styled-components/macro'

export const Input = styled.input<{error?: boolean}>`
  background-color: ${({ theme }) => theme.colors.baseLight};
  border-radius: 0.3rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.secondary};
  box-shadow: inset 0 0.1rem 0.2rem 0 rgba(0, 0, 0, 0.2);
  padding: 1rem;
  color: ${({ theme }) => theme.colors.baseDark};
  transition: border 0.2s ease-out;
  width: 100%;
  &::placeholder {
    color: ${({ theme }) => theme.colors.secondaryLight};
  }
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.focus};
    outline: 0;
  }
  ${({ theme, error }) => error && `border: 1px solid ${theme.colors.error};`}
`
