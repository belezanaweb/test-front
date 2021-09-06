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

import { Container, Content } from './styles'
import Loading from '../../components/Helper/Loading'

const { CART, PAYMENT, CONFIRMATION } = STEPS

const Checkout = () => {
  const [step, setStep] = useState(CART)
  const [products, setProducts] = useState(null)
  const { request, loading } = useFetch()

  const isPaymentStep = step === PAYMENT

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
        [CART]: PAYMENT,
        [PAYMENT]: CONFIRMATION,
        [CONFIRMATION]: CART
      }

      return steps[step]
    })
  }, [])

  const PAGES = {
    [CART]: <Products products={products} />,
    [PAYMENT]: <Payment form={form} />,
    [CONFIRMATION]: (
      <>
        <Confirmation form={form} />
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

  if (loading) return <Loading />

  return (
    <Container>
      <Header step={step} setStep={setStep} form={form} />
      <Content>
        {PAGES[step]}
        <Totals products={products} />

        {step !== CONFIRMATION && (
          <div className="buttonContainer">
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
          </div>
        )}
      </Content>
    </Container>
  )
}

export default Checkout
