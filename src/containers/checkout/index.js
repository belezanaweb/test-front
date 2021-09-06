import React, { useState, useCallback, useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { STEPS } from './util/constants'
import { PRODUCTS_GET, API_URL } from '../../services/api'

import Header from './components/header'
import Products from './components/products'
import Payment from './components/payment'
import Totals from './components/totals'
import Confirmation from './components/confirmation'
import Button from '../../components/Button'

import { Container } from './styles'

const { SACOLA, PAGAMENTO, CONFIRMAÇÃO } = STEPS

const Checkout = () => {
  const [step, setStep] = useState(PAGAMENTO)
  const [products, setProducts] = useState(null)
  const { request, loading } = useFetch()

  const isPaymentStep = step === PAGAMENTO

  const form = useFormik({
    initialValues: {},
    validateOnChange: false,
    validationSchema: yup.object().shape({
      cardNumber: yup.string().length(12).required(),
      name: yup.string().min(3).required(),
      validity: yup.string().min(6).required(),
      cvv: yup.string().min(3).required()
    }),
    onSubmit: () => handleStep(step)
  })

  const handleStep = useCallback(() => {
    setStep((step) => {
      const steps = {
        [SACOLA]: PAGAMENTO,
        [PAGAMENTO]: CONFIRMAÇÃO,
        [CONFIRMAÇÃO]: SACOLA
      }

      return steps[step]
    })
  }, [])

  const PAGES = {
    [SACOLA]: <Products products={products} />,
    [PAGAMENTO]: <Payment form={form} />,
    [CONFIRMAÇÃO]: (
      <>
        <Confirmation />
        <Products products={products} />
      </>
    )
  }

  const requestProducts = useCallback(async () => {
    const { json } = await request(API_URL, PRODUCTS_GET)
    setProducts(json)
  }, [request])

  useEffect(() => {
    requestProducts()
  }, [requestProducts])

  if (loading) return <span>Carregando...</span>

  return (
    <>
      <Header step={step} setStep={setStep} form={form} />
      <Container>
        {PAGES[step]}
        <Totals products={products} />

        {step !== CONFIRMAÇÃO && (
          <Button
            title={isPaymentStep ? 'FINALIZAR O PEDIDO' : 'SEGUIR PARA O PAGAMENTO'}
            onClick={() => {
              if (isPaymentStep) {
                form.submitForm()
              } else {
                handleStep(step)
              }
            }}
          />
        )}
      </Container>
    </>
  )
}

export default Checkout
