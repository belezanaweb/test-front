import styled from 'styled-components'
import InputMask from 'react-input-mask'

type Props = {
  $error?: boolean
}

export const Input = styled(InputMask)`
  width: 100%;
  height: 44px;
  padding: 0 14px;
  border: 1px solid ${(props) => props.theme.colors.gray01};
  font-size: ${(props) => props.theme.font.size.small};
  border-radius: 4px;

  &::placeholder,
  &::-webkit-input-placeholder {
    color: ${(props) => props.theme.colors.gray01};
  }
`

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
  position: relative;
  gap: 5px;

  ${({ $error, theme }) =>
    !!$error &&
    `
    ${Input} {
      border-color: ${theme.colors.red};
    }
  `}
`

export const Label = styled.label`
  font-size: ${(props) => props.theme.font.size.small};
  color: ${(props) => props.theme.colors.gray02};
`

export const Error = styled.span`
  font-size: ${(props) => props.theme.font.size.xsmall};
  color: ${(props) => props.theme.colors.red};
  position: absolute;
  bottom: 0;
`
