import React from 'react'
import PropTypes from 'prop-types'

import mask from '../../constants/mask'

import Wrapper from './Wrapper'
import Input from './Input'
import Button from '../Button'

import { Container, Group, ButtonContainer } from './styles'

const Form = ({ values, handleChange }) => (
  <Container>
    <Input
      type='text'
      label='Número do cartão:'
      id='card'
      placeholder='____.____.____.____'
      value={values.card}
      mask={mask.CARD}
      handleChange={handleChange}
      guide={false}
      withMask
    />

    <Input
      type='text'
      label='Nome do Titular:'
      id='name'
      placeholder='Como no cartão'
      value={values.name}
      handleChange={handleChange}
    />

    <Group>
      <Input
        type='text'
        label='Validade (mês/ano):'
        id='expiration'
        placeholder='__/____'
        value={values.expiration}
        mask={mask.EXPIRATION}
        handleChange={handleChange}
        width={50}
        guide={false}
        withMask
      />

      <Input
        type='text'
        label='CVV:'
        id='code'
        placeholder='___'
        mask={mask.CODE}
        value={values.code}
        handleChange={handleChange}
        width={45}
        guide={false}
        withMask
      />
    </Group>

    <ButtonContainer>
      <Button go={false} to='/finish'>
        Finalize o pedido
      </Button>
    </ButtonContainer>
  </Container>
)

Form.propTypes = {
  values: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired
}
export default Wrapper(Form)
