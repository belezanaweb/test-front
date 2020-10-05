import styled from 'styled-components'

export const DefaultStyled = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  min-height: 100vh;
  @media (max-width: 1199.98px) {
    padding-bottom: 84px;
  }
`
