import styled from 'styled-components'
import { device } from '../../styles/breakpoints'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 var(--spacing-2);
  margin: 0 auto;
  max-width: 600px;

  @media ${device.desktop} {
    max-width: 900px;
  }
`

export const Layout = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-rows: var(--spacing-8) 1fr;
`
