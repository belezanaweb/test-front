import styled from 'styled-components'
import theme from 'theme'

export const StyledInput = styled.input`
  box-sizing: border-box;
  border-radius: ${theme.borderRadius};
  width: 100%;
  border: ${theme.border('#E7E7E7')};
  box-shadow: inset 0 1px 2px 0 rgba(0,0,0,0.2);
  padding: 1.077rem 1rem 0.9231rem 1rem;
  margin-top: 0.3846rem;

  ::placeholder {
    color: ${theme.inputPlaceholderColor};
  }
`

export const StyledLabel = styled.label`
  color: ${theme.labelColor};
  font-size: 0.75rem;
  font-weight: ${theme.fontWeightBold};
  line-height: 0.875rem;
`
