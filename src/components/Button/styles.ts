import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 100%;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.purple};
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.font.size.large};
`
