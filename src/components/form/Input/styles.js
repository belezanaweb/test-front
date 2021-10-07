import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 45px;
  font-size: ${theme.size[4]};
  border: 1px solid ${({ error }) => (error ? theme.colors.red : theme.colors.grayWhite)};
  border-radius: 3px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 29, 0.22);
  padding: 12px;
  margin-top: 5px;
  &::placeholder {
    font-size: ${theme.size[4]};
    color: ${theme.colors.grayIce};
  }
  &:focus {
    outline: none;
    border-color: ${theme.colors.pink};
  }
`

export const InputBlock = styled.div`
  margin-bottom: ${theme.spacing.md};
`

export const InputGroup = styled.div`
  display: flex;
  > ${InputBlock} {
    flex-grow: 1;
    margin-bottom: 0;
    :not(:first-of-type) {
      margin-left: ${theme.spacing.sm};
    }
  }
`

export const Label = styled.label`
  font-size: ${theme.size[1]};
  font-weight: bold;
  color: ${theme.colors.gray};
  ${theme.media.md} {
    font-size: ${theme.size[3]};
  }
`
export const ErrorMessage = styled.span`
  font-size: ${theme.size[1]};
  color: ${theme.colors.red};
`
