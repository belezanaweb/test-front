import React from 'react'

import { Container, Text, IconSuccess } from './styles'

function BannerSuccess({ title, ...rest }) {
  return (
    <Container {...rest}>
      <IconSuccess />
      <Text>{title}</Text>
    </Container>
  )
}

export default BannerSuccess
