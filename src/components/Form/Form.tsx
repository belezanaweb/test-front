import React, { FC } from 'react'
import { ErrorMessage, Field, Formik, FormikConfig, FormikValues, FormikHelpers } from 'formik'

import { IFields } from './interface'
import Input from './Input'
import Validation from './Validation'
import * as S from './Form.styled'

interface IForm {
  fieldsList: IFields[]
  onSubmit: (values: any, formikHelpers: FormikHelpers<any>) => void | Promise<any>
}

export const FormBuilder: FC<IForm> = ({ fieldsList, onSubmit }) => {
  const validation = new Validation(fieldsList)

  const handleValidation = (values: {}) => {
    let errors = {}
    const fieldValidation = validation.validateFields(values)
    errors = { ...errors, ...fieldValidation.errors }
    return errors
  }

  const getInitialValues = () => {
    let values = {}
    fieldsList.forEach((field) => {
      values = { ...values, [field.id]: '' }
    })
    return values
  }

  const initialValues = getInitialValues()

  return (
    <Formik
      initialValues={initialValues}
      validate={handleValidation}
      validateOnChange={false}
      onSubmit={onSubmit}
    >
      <S.Form>
        {fieldsList.map((field, index) => {
          return (
            <S.FieldWrapper key={index} className={`field-${field.id}`}>
              <S.Label htmlFor={field.id}>{`${field.label}:`}</S.Label>
              <Field
                id={field.id}
                type={field.type}
                placeholder={field.placeholder}
                name={field.id}
                mask={field.mask}
                component={Input}
              />
              <ErrorMessage name={field.id}>{(msg) => <S.Message>{msg}</S.Message>}</ErrorMessage>
            </S.FieldWrapper>
          )
        })}
      </S.Form>
    </Formik>
  )
}

export const Form: FC<FormikConfig<FormikValues>> = ({ children, ...rest }) => (
  <Formik {...rest}>
    <S.Form>{children}</S.Form>
  </Formik>
)
