import styled from 'styled-components'

export const Container = styled.div`
  padding: 10px;
  background-color: #eee;
  min-height: 100vh;
`

export const InnerContainer = styled.div`
  max-width: inherit;
  ${({ deskFlex }) => (deskFlex ? 'display: flex; justify-content: space-around;' : '')}
  @media screen and (max-width: 1023px) {
    display: inherit;
    max-width: 360px;
    margin: auto;
  }
`
