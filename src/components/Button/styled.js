import styled from 'styled-components'
import theme from 'theme'

export const StyledButton = styled.a`
  width: ${(props) => (props.block ? '100%' : 'auto')};
  display: inline-block;
  border-radius: 3px;
  background-color: ${theme.colors.primary[0]};
  box-shadow: inset 0 -3px 0 0 ${theme.colors.primary[1]}, 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  padding: 18px;
  color: white;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  &:hover {
    background-color: ${theme.colors.primary[1]};
    box-shadow: inset 0 0px 0 0 ${theme.colors.primary[1]}, 0 2px 4px 0 rgb(0 0 0 / 25%);
    cursor: pointer;
  }
`
