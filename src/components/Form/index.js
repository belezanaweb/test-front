import React from 'react'
import Mask from 'react-maskedinput'

import Input from './Input'

import { Container, Group } from './styles'

const Form = () => (
  <Container>
    <Input label='Número do cartão:' id='card'>
      <Mask id='card' mask='1111.1111.1111.1111' placeholder='____.____.____.____' />
    </Input>
    <Input label='Nome do Titular:' id='holder'>
      <input id='holder' placeholder='Como no cartão' />
    </Input>
    <Group>
      <Input label='Validade (mês/ano):' id='validity' width={55}>
        <Mask id='validity' mask='11/1111' placeholder='__/____' />
      </Input>
      <Input label='CVV:' id='code' width={40}>
        <Mask id='code' mask='111' placeholder='___' />
      </Input>
    </Group>
  </Container>
)

export default Form
