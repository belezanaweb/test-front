import React from 'react';
import { withFormik, Field, Form as FormikForm } from 'formik';
import * as yup from 'yup';

const Form = ({
  errors,
}) => (
  <FormikForm id='creditCardForm'>
    <label>Numero do cartão</label>
    <Field
      name='cardNumber'
      type='text'
      placeholder='____.____.____.____'
      maxLength='16' />
    <span>{errors && errors.cardNumber}</span>
  </FormikForm>
)

export default withFormik({
  mapPropsToValues: () => ({
    cardNumber: ''
  }),
  handleSubmit: (values, props) => {
    console.log(values)
    console.log(props)
  },
  validationSchema: yup.object().shape({
    cardNumber: yup
      .string()
      .required('Campo obrigatório')
  })
})(Form)
