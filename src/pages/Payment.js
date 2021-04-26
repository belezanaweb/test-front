import React from 'react'
import { Link } from 'react-router-dom'

import CustomNavbar from '../components/custom-navbar'
import ProductCard from '../components/product-card'
import PaymentForm from '../components/payment-form'
import ResumeCard from '../components/resume-card'
import CustomButton from '../components/custom-button'
import DataStorage from '../data/data-storage'

export default function Payment() {
  return (
    <div>
      <CustomNavbar current_page="payment" />
      <ProductCard title="Cartão de Crédito">
        <PaymentForm />
      </ProductCard>
      <ResumeCard values={DataStorage.getResume()}></ResumeCard>
      <Link to="/confirmation">
        <CustomButton id="btnFinalizar" label="Finalizar o Pedido" disabled={true}></CustomButton>
      </Link>
    </div>
  )
}
