import styled from 'styled-components'
import theme from './theme'

export const Main = styled.main`
  display: block;
  padding: 10px;

  ${theme.media.desktop} {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 40px;
    grid-template-areas: '. .';
    padding: 10px 30px;
  }
`
