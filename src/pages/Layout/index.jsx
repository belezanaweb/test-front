import React from 'react'

import Header from '../../components/Header'
import { Container, Content } from './styles'

function Layout({ children }) {
  return (
    <>
      <Header />
      <Container>
        <Content>{children}</Content>
      </Container>
    </>
  )
}

export default Layout
