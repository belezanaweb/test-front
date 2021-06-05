import styled from 'styled-components'
import InputMask from 'react-input-mask'

export const StyledInputMask = styled(InputMask)`
  box-sizing: border-box;
  height: 45px;
  width: 100%;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.input.background};
  box-shadow: inset 0 1px 2px 0 ${({ theme }) => theme.colors.input.shadow};
  outline: none;
  padding: 0 13px 0 13px;
  color: ${({ theme }) => theme.colors.input.text};
  font-family: ${({ theme }) => theme.font.family};
  font-size: 16px;
  line-height: 19px;

  border: 1px solid
    ${({ theme, error }) => (error ? theme.colors.input.error : theme.colors.input.border)};

  ::placeholder {
    color: ${({ theme }) => theme.colors.input.placeholder};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.input.focus};
  }
`
