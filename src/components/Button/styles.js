import styled from 'styled-components'
import theme from '../../styles/theme'

export const ButtonContainer = styled.button`
  height: 60px;
  width: 100%;
  border-radius: 3px;
  border: none;
  font-size: ${theme.size[5]};
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  color: ${theme.colors.white};
  background-color: ${theme.colors.primary};
  box-shadow: inset 0 -3px 0 0 ${theme.colors.primaryDark}, 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  letter-spacing: 0.5px;
  text-align: center;
  padding: ${theme.size[2]};
  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.primaryDark};
  }
`
