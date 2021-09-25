import React from 'react'

/**
 * Components
 */
import { Container } from '../Utils/styles'
import Menu from '../Menu'

/**
 * Styles
 */
import { Wrapper } from './styles'

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Menu />
      </Wrapper>
    </Container>
  )
}

export default Header
