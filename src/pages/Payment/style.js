import styled from 'styled-components'

export const Section = styled.section`
  width: 100%;
  margin-bottom: 25px;
  padding: 0px 10px;
  background-color: ${(props) => props.theme.colors.mediumGray};
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    width: 48%;
    margin: 0 auto;
  }
`
