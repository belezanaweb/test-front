import React from 'react';
import { withFormik, Field, Form as FormikForm } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  label {
    font-size: 1.2rem;
    font-weight: 700;
    margin-left: .3rem;
    color: ${({error}) => (
      error
        ? 'var(--color-red-1)'
        : 'var(--color-light-gray-1);'
    )}
  }

  input {
    font-size: 1.6rem;
    color: var(--color-black-1);
    border: ${({ error }) => (
      error
        ? 'var(--border-error)'
        : 'var(--border-light-gray-1)'
    )};
    padding: 1rem;
    margin: .5rem 0;
    border-radius: 4px;

    ::-webkit-input-placeholder {
      color: #e0e7ee;
    }

    :-moz-placeholder {
      /* Firefox 18- */
      color: #e0e7ee;
    }

    ::-moz-placeholder {
      /* Firefox 19+ */
      color: #e0e7ee;
    }

    :-ms-input-placeholder {
      color: #e0e7ee;
    }
  }

  span {
    margin-left: .3rem;
    color: var(--color-red-1);
    font-size: 1.2rem;
    font-weight: 700;
  }
`

const FormColumn = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px)  {
    flex-direction: row
  }

  * { flex: 1 1 auto; }
`

const Form = ({
  errors,
  touched
}) => (
  <FormikForm id='creditCardForm'>
    <FormRow error={touched.cardNumber && errors.cardNumber}>
      <label>Número do cartão:</label>
      <Field
        name='cardNumber'
        type='text'
        placeholder='____.____.____.____'
        maxLength='16' />
      {touched.cardNumber && errors.cardNumber && <span>{errors.cardNumber}</span>}
  </FormRow>

  <FormRow error={touched.cardName && errors.cardName}>
    <label>Nome do Titular:</label>
    <Field
      name='cardName'
      type='text'
      placeholder='Como no cartão' />
      {touched.cardName && errors.cardName && <span>{errors.cardName}</span>}
  </FormRow>

  <FormColumn>
    <FormRow error={touched.cardValidity && errors.cardValidity}>
      <label>Validade (mês/ano):</label>
      <Field
        name='cardValidity'
        type='text'
        placeholder='__/____'
        maxLength='6' />
      {touched.cardValidity && errors.cardValidity && <span>{errors.cardValidity}</span>}
    </FormRow>

    <FormRow error={touched.cardCCV && errors.cardCCV}>
      <label>CCV:</label>
      <Field
        name='cardCCV'
        type='text'
        placeholder='___'
        maxLength='3' />
      {touched.cardCCV && errors.cardCCV && <span>{errors.cardCCV}</span>}
    </FormRow>
  </FormColumn>
</FormikForm>
)

export default withFormik({
  mapPropsToValues: () => ({
    cardNumber: '',
    cardName: '',
    cardValidity: '',
    cardCCV: ''

  }),
  handleSubmit: (values, props) => {
    console.log(values)
    console.log(props)
  },
  validationSchema: yup.object().shape({
    cardNumber: yup
      .string()
      .required('Preencha o campo número do cartão'),
    cardName: yup
      .string()
      .required('Preencha o campo nome do titular'),
    cardValidity: yup
      .date('MM/YYYY')
      .typeError('Insira uma data válida')
      .required('Preencha o campo data'),
    cardCCV: yup
      .string()
      .required('Preencha o campo CCV')
  })
})(Form)
