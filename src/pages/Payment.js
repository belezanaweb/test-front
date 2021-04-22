import React from 'react'

import CustomNavbar from '../components/custom-navbar'
import ProductCard from '../components/product-card'
import ResumeCard from '../components/resume-card'
import CustomButton from '../components/custom-button'
import DataStorage from '../data/data-storage'

const Payment = () => (
  <div>
    <CustomNavbar current_page="payment" />
    <ProductCard title="Cartão de Crédito">
      <div>Formulário</div>
    </ProductCard>
    <ResumeCard values={DataStorage.getResume()}></ResumeCard>
    <CustomButton title="Finalizar o Pedido"></CustomButton>
  </div>
)

export default Payment
