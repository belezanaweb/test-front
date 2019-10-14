import styled from 'styled-components'
import theme from 'theme'

const defaultBorder = theme.border('#E7E7E7')
const errorBorder = theme.border(theme.errorColor)

export const StyledInput = styled.input`
  box-sizing: border-box;
  border-radius: ${theme.borderRadius};
  width: 100%;
  color: ${theme.inputColor};
  border: ${props => props.hasError ? errorBorder : defaultBorder};
  box-shadow: inset 0 1px 2px 0 rgba(0,0,0,0.2);
  padding: 1.077rem 1rem 0.9231rem 1rem;
  margin-top: 0.3846rem;
  transition: border ${theme.transition};

  ::placeholder {
    color: ${theme.inputPlaceholderColor};
    transition: color ${theme.transition};
  }

  &:focus {
    outline: none;
    border: ${theme.border(theme.focusColor)};
    ::placeholder {
      color: ${theme.focusColor};
    }
  }
`

export const StyledLabel = styled.label`
  display: block;
  color: ${theme.labelColor};
  font-size: 0.9231rem;
  font-weight: ${theme.fontWeightBold};
  line-height: 1.077rem;
`

export const StyledLabelError = styled.label`
  width: 129.71px;
  color: #F30;
  font-size: 12px;
  line-height: 14px;
  opacity: ${props => props.hasError ? 1 : 0};
  transition: opacity ${theme.transition};
`
