import styled from 'styled-components'

export const Button = styled.button`
  width: 100%;
  background-color: ${(props) => props.theme.light.colors['--c-contrast-two']};
  border: none;
  padding: 15px 0;
  border-radius: 3px;

  box-shadow: inset 0 -3px 0 0 ${(props) => props.theme.light.colors['--c-contrast-tree']},
    1px 1px 10px 1px rgb(0 0 29 / 12%);

  color: white;
  font-size: ${(props) => props.theme.fontSizes.extraLarge};
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;

  &:hover {
    background-color: ${(props) => props.theme.light.colors['--c-contrast-tree']};
  }

  &:disabled {
    background-color: ${(props) => props.theme.light.colors['--c-contrast-tree']};
  }
`
