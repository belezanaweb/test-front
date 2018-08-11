import React from 'react'
import PropTypes from 'prop-types'

import mask from '../../constants/mask'

import Wrapper from './Wrapper'
import Input from './Input'
import Button from '../Button'

import { Container, Group, ButtonContainer } from './styles'

const Form = ({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
  <Container onSubmit={handleSubmit}>
    <Input
      type='text'
      label='Número do cartão:'
      id='card'
      placeholder='____.____.____.____'
      value={values.card}
      mask={mask.CARD}
      handleChange={handleChange}
      handleBlur={handleBlur}
      errors={errors}
      touched={touched}
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
      handleBlur={handleBlur}
      errors={errors}
      touched={touched}
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
        handleBlur={handleBlur}
        width={50}
        errors={errors}
        touched={touched}
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
        handleBlur={handleBlur}
        width={45}
        errors={errors}
        touched={touched}
        guide={false}
        withMask
      />
    </Group>

    <ButtonContainer>
      <Button type='submit' to='/finish' go={false}>
        Finalize o pedido
      </Button>
    </ButtonContainer>
  </Container>
)

Form.propTypes = {
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired
}
export default Wrapper(Form)
