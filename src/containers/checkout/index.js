import React, { useState, useCallback, useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { STEPS } from './util/constants'
import { PRODUCTS_GET, API_URL } from '../../services/api'

import Header from './components/header'
import Products from './components/products'
import Totals from './components/totals'
import Button from '../../components/Button'

import { Container } from './styles'

const { SACOLA, PAGAMENTO, CONFIRMAÇÃO } = STEPS

const Checkout = () => {
  const [step, setStep] = useState(SACOLA)
  const [products, setProducts] = useState(null)
  const { request, loading } = useFetch()

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
    [SACOLA]: <Products products={products} />
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
      <Header step={step} setStep={setStep} />
      <Container>
        {PAGES[step]}
        <Totals products={products} />

        {step !== CONFIRMAÇÃO && (
          <Button
            title={step === SACOLA ? 'SEGUIR PARA O PAGAMENTO' : 'FINALIZAR O PEDIDO'}
            onClick={() => handleStep(step)}
          />
        )}
      </Container>
    </>
  )
}

export default Checkout
