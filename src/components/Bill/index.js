import React from 'react'

import Detail from './Detail'

import { Container } from './styles'

const Bill = () => (
  <Container>
    <Detail value='****.****.****.1234' />
    <Detail value='José da Silva' />
    <Detail value='05/2019' />
  </Container>
)

export default Bill
