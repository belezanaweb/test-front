import styled from 'styled-components'

interface AttrsProps {
  minlength?: string | number;
  maxlength?: string | number;
}

const Input = styled.input.attrs(({ minlength, maxlength }: AttrsProps) => {
  return {
    minLength: minlength || 0,
    maxLength: maxlength || 1000
  }
})`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid
    ${({ theme, error }) => {
      if (error) {
        return theme.colors.error
      }

      return theme.colors['gray-100']
    }} !important;
  border-radius: 4px;
  border: none;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.small}px;
  margin-top: 8px;
  outline: none;
  padding: 14px;
  width: 100%;
  height: 44px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.black} !important;
  }
`

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  line-height: 20px;
  color: ${({ theme }) => theme.colors['gray-600']};
`

interface WrapperType {
  width: string;
}

const Wrapper =
  styled.div.attrs({
    className: 'input'
  }) <
  WrapperType >
  `
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  margin-bottom: 10px;
  margin-top: 10px;
  position: relative;
  width: ${({ width }) => width};

  & + .input {
    margin-left: 8px;
  }
`

const Error = styled.span`
  color: ${({ theme }) => theme.colors.error};
  font-size: 12px;
  margin-top: 8px;
`

export { Input, Label, Wrapper, Error }
