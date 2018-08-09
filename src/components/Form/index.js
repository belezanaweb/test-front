import React from 'react'
import Mask from 'react-text-mask'

import Input from './Input'

import { Container, Group } from './styles'

const masks = {
  card: [
    /[1-9]/,
    /\d/,
    /\d/,
    /\d/,
    '.',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    '.',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    '.',
    /\d/,
    /\d/,
    /\d/,
    /\d/
  ],
  validity: [/[1-9]/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
  code: [/[1-9]/, /\d/, /\d/]
}

const Form = () => (
  <Container>
    <Input label='Número do cartão:' id='card'>
      <Mask id='card' mask={masks.card} placeholder='____.____.____.____' />
    </Input>
    <Input label='Nome do Titular:' id='holder'>
      <Mask id='holder' placeholder='Como no cartão' />
    </Input>
    <Group>
      <Input label='Validade (mês/ano):' id='validity' width={55}>
        <Mask id='validity' mask={masks.validity} placeholder='__/____' />
      </Input>
      <Input label='CVV:' id='code' width={40}>
        <Mask id='code' mask={masks.code} placeholder='___' />
      </Input>
    </Group>
  </Container>
)

export default Form
