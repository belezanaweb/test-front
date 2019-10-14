import styled from 'styled-components'
import theme from '../../theme'

const button = styled.button`
  height: 4.615rem;
  border-radius: ${theme.borderRadius};
  background-color: ${theme.buttonColor};
  color: ${theme.buttonTextColor};
  border: 0;
  box-shadow: inset 0 -3px 0 0 ${theme.buttonSecundaryColor}, 0 2px 4px 0 rgba(0,0,0,0.25);
  width: 100%;
  font-size: 1.538rem;
  font-weight: ${theme.fontWeightBold};
  line-height: 1.846rem;
  letter-spacing: 0.5px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;

  &:disabled, &:disabled:hover {
    background-color: ${theme.buttonDisabledColor};
    box-shadow: none;
    cursor: not-allowed;
  }

  &:hover {
    background-color: ${theme.buttonSecundaryColor};
  }

  &:active {
    transform: scale(.99);
    transition: transform ${theme.transition}
  }
`

export default button
