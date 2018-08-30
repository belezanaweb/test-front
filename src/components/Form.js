import React from 'react';
import { withFormik, Field, Form as FormikForm } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';
import MaskedInput from 'react-text-mask';

import { cardNumberMask, cardDateMask, cardCCVMask } from '../constraints';

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
  flex-direction: row;

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
        maxLength='20'
        render={({field}) => (
          <MaskedInput
            {...field}
            guide={false}
            placeholder='____ ____ ____ ____'
            mask={cardNumberMask} />
        )}
      />
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
    <FormRow error={touched.cardDate && errors.cardDate}>
      <label>Validade (mês/ano):</label>
      <Field
        name='cardDate'
        type='text'
        maxLength='6'
        render={({field}) => (
          <MaskedInput
            {...field}
            placeholder='__/____'
            guide={false}
            mask={cardDateMask} />
        )} />
      {touched.cardDate && errors.cardDate && <span>{errors.cardDate}</span>}
    </FormRow>

    <FormRow error={touched.cardCCV && errors.cardCCV}>
      <label>CCV:</label>
      <Field
        name='cardCCV'
        type='text'
        maxLength='3'
        render={({field}) => (
          <MaskedInput
            {...field}
            placeholder='___'
            guide={false}
            mask={cardCCVMask} />
        )} />
      {touched.cardCCV && errors.cardCCV && <span>{errors.cardCCV}</span>}
    </FormRow>
  </FormColumn>
</FormikForm>
)

export default withFormik({
  mapPropsToValues: () => ({
    cardNumber: '',
    cardName: '',
    cardDate: '',
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
    cardDate: yup
      .date('MM/YYYY')
      .required('Preencha o campo validade')
      .min(8, 'Preencha os 8 dígitos'),
    cardCCV: yup
      .string()
      .required('Preencha o campo CCV')
      .min(3, 'Preencha os 3 dígitos')
  })
})(Form)
