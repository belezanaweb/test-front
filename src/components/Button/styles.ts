import styled from 'styled-components'

type Props = {
  $type?: 'default' | 'primary'
}

export const Container = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 100%;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${({ $type, theme }) =>
    $type === 'default' ? theme.colors.black : theme.colors.purple};
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.font.size.large};
`
