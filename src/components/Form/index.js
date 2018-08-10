import React from 'react'
import Mask from 'react-maskedinput'
import { withFormik, Field } from 'formik'
import * as Yup from 'yup'

import Input from './Input'

import { Container, Group, Error } from './styles'

const Form = ({ values, errors, handleSubmit, handleChange, handleBlur }) => (
  <Container onSubmit={handleSubmit}>
    {console.log('VALUES:', values)}
    {console.log('errors:', errors)}
    <Input label='Número do cartão:' id='card' hasError={errors.card}>
      <Field
        name='card'
        render={({ field }) => <Mask mask='1111.1111.1111.1111' {...field} id='card' />}
      />
      {errors.card && <Error>{errors.card}</Error>}
    </Input>
    <Input label='Nome do Titular:' id='holder'>
      <input id='holder' name='holder' placeholder='Como no cartão' />
    </Input>
    <Group>
      <Input label='Validade (mês/ano):' id='expiration' width={55} hasError={errors.expiration}>
        <Field
          name='expiration'
          render={({ field }) => <Mask mask='11/1111' {...field} id='expiration' />}
        />
        {errors.expiration && <Error>{errors.expiration}</Error>}
      </Input>
      <Input label='CVV:' id='code' width={40} hasError={errors.code}>
        <Field name='code' render={({ field }) => <Mask mask='111' {...field} id='code' />} />
        {errors.code && <Error>{errors.code}</Error>}
      </Input>
    </Group>
  </Container>
)

const FromWrapper = withFormik({
  mapPropsToValues: () => ({
    card: '',
    holder: '',
    expiration: '',
    code: ''
  }),
  validationSchema: Yup.object().shape({
    card: Yup.string()
      .label('Credit card')
      .min(16)
      .max(16)
      .required('Credit card is required.'),
    code: Yup.string()
      .min(3)
      .max(3)
      .required('CVV is required.'),
    expiration: Yup.string()
      .min(7)
      .max(7)
      .required('Expiration is required.')
  }),
  handleSubmit: values => {
    console.log(values)
  }
})(Form)

export default FromWrapper
