import { Formik, Form, FormikProps, FormikConfig } from 'formik'
import { Input } from 'components'
import { CheckoutPaymentSchema, initialValues } from './utils'
import * as Styled from './styled'
import { forwardRef, useImperativeHandle, useRef } from 'react'
import { FormValues, CheckoutPaymentProps, ForwardRefProps } from './interfaces'
import { useState } from 'react'
import { maskCardNumber } from 'utils/data'

export type Props<Values> = FormikConfig<Values>

const CheckoutPayment = forwardRef<ForwardRefProps, CheckoutPaymentProps>(({ onPaymentSuccess }, forwardRef) => {
  const [useExternalErrors, setExternalErrors] = useState<FormValues>(null)
  const formRef = useRef<FormikProps<FormValues>>()

  useImperativeHandle(forwardRef, () => ({
    async submit() {
      const validationResult = (await formRef.current.validateForm(formRef.current.values)) as FormValues
      const isFormValid = Object.keys(validationResult).length === 0

      if (isFormValid) {
        formRef.current.values.creditCardNumber = maskCardNumber(formRef.current.values.creditCardNumber)

        handleSubmit(formRef.current.values)
        setExternalErrors(initialValues)
      } else {
        setExternalErrors(validationResult)
      }

      return {
        values: formRef.current.values,
        valid: isFormValid,
      }
    },
  }))

  const handleSubmit = (_) => {
    onPaymentSuccess()
  }

  return (
    <Styled.Wrapper>
      <Formik<FormValues>
        innerRef={formRef}
        initialValues={initialValues}
        validationSchema={CheckoutPaymentSchema}
        onSubmit={handleSubmit}
        validateOnMount
        validateOnChange
      >
        {({ errors, touched, values, handleChange, handleBlur }) => (
          <Form>
            <Input
              label="Número"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.creditCardNumber}
              mask="9999 9999 9999 9999"
              placeholder="0000 0000 0000 0000"
              name="creditCardNumber"
              errorMessage={
                (touched.creditCardNumber && errors.creditCardNumber) || useExternalErrors?.creditCardNumber
                  ? errors.creditCardNumber
                  : ''
              }
            />

            <Input
              label="Nome do titular do cartão"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.creditCardName}
              placeholder="Nome impresso no cartão"
              name="creditCardName"
              errorMessage={
                (touched.creditCardName && errors.creditCardName) || useExternalErrors?.creditCardName
                  ? errors.creditCardName
                  : ''
              }
            />

            <Styled.Row>
              <Input
                label="Data de validade"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.creditCardExpiration}
                mask="99/99"
                placeholder="MM/AA"
                name="creditCardExpiration"
                errorMessage={
                  (touched.creditCardExpiration && errors.creditCardExpiration) ||
                  useExternalErrors?.creditCardExpiration
                    ? errors.creditCardExpiration
                    : ''
                }
              />
              <Input
                label="Código CVV"
                mask="999"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.creditCardCode}
                placeholder="000"
                name="creditCardCode"
                errorMessage={
                  (touched.creditCardCode && errors.creditCardCode) || useExternalErrors?.creditCardCode
                    ? errors.creditCardCode
                    : ''
                }
              />
            </Styled.Row>
          </Form>
        )}
      </Formik>
    </Styled.Wrapper>
  )
})

export default CheckoutPayment
