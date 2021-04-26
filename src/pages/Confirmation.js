import React from 'react'

import CustomNavbar from '../components/custom-navbar'
import ProductCard from '../components/product-card'
import ResumeCard from '../components/resume-card'
import ProductItem from '../components/product-item'
import ConfirmMessage from '../components/confirm-message'
import DataStorage from '../data/data-storage'

export default function Confirmation() {
  return (
    <div>
      <CustomNavbar current_page="confirmation" />
      <ConfirmMessage message="Compra efetuada com sucesso" />
      <ProductCard title="Pagamento">{renderPaymentData()}</ProductCard>
      <ProductCard title="Produtos">{renderItems()}</ProductCard>
      <ResumeCard values={DataStorage.getResume()}></ResumeCard>
    </div>
  )
}

function renderItems() {
  return DataStorage.getProductItems().map((item, index) => (
    <ProductItem
      key={index}
      title={item.title}
      image={item.image}
      price={item.price}
      simple="true"
    />
  ))
}

function renderPaymentData() {
  let data = DataStorage.getPaymentData()

  return (
    <div>
      <span className="font-bold">{data.card_number}</span>
      <span className="font-bold">{data.card_name}</span>
      <span className="font-bold">{data.card_expiration}</span>
    </div>
  )
}
