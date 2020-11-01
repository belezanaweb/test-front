import styled from 'styled-components'

export const Layout = styled.main`
  display: flex;
  flex-direction: column;
`

export const LayoutGrid = styled.div`
  flex-grow: 1;
  display: grid;
  grid-gap: 20px;
  padding: 0 9px 20px;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    margin-top: 40px;
    grid-template-columns: 1fr 340px;
  }
`

export const LayoutContainer = styled.div`
  display: grid;
  align-content: start;
  grid-gap: 20px;
`

export const LayoutAside = styled.aside`
  display: grid;
  align-content: start;
  grid-gap: 20px;

  @media only screen and (min-width: 768px) {
    margin-top: 20px;
  }
`
