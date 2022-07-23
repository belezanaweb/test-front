import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  border: 1px solid #d4d4d4;
  padding: 15px;
  border-radius: ${(props) => props.theme.borderRadius};
  margin-top: 26px;
  div {
    width: 100%;
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors.primary};
    display: flex;
    justify-content: space-between;
    p {
      text-transform: uppercase;
    }
    &:not(:last-child) {
      margin-bottom: 8px;
    }
    &:nth-child(3) {
      margin-bottom: 16px;
    }
  }
  .orange {
    color: ${(props) => props.theme.colors.orange};
  }
  @media screen and (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    div {
      p {
        font-size: 1.2rem;
      }
    }
  }
`
