import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  padding: 13px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borderRadius};
  margin-bottom: 20px;
  box-shadow: ${(props) => props.theme.shadow};
  div {
    width: 100%;
    font-size: ${(props) => props.theme.fonts.text};
    color: ${(props) => props.theme.colors.primary};
    display: flex;
    justify-content: space-between;
    p {
      text-transform: uppercase;
    }
  }
  @media screen and (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    div {
      p {
        font-size: ${(props) => props.theme.fonts.desktop};
      }
    }
  }
`
