import styled from 'styled-components'

export const Container = styled.h4`
  padding: 0 10px;
  font-size: ${(props) => props.theme.fonts.title};
  font-weight: 800;
  color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 5px;
  text-transform: uppercase;
  @media screen and (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    font-size: ${(props) => props.theme.fonts.desktop};
  }
`
