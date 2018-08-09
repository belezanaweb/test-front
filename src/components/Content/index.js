import React from 'react'
import PropTypes from 'prop-types'

import { Container, Title, Wrapper } from './styles'

const Content = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Wrapper>{children}</Wrapper>
  </Container>
)

Content.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Content
