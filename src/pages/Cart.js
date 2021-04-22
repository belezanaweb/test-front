import React from 'react'

import CustomNavbar from '../components/custom-navbar'
import ProductCard from '../components/product-card'
import ResumeCard from '../components/resume-card'
import CustomButton from '../components/custom-button'
import ProductItem from '../components/product-item'
import DataStorage from '../data/data-storage'

const Cart = () => (
  <div>
    <CustomNavbar current_page="cart" />
    <ProductCard title="Produtos">{renderItems()}</ProductCard>
    <ResumeCard values={DataStorage.getResume()}></ResumeCard>
    <CustomButton title="Seguir para o Pagamento"></CustomButton>
  </div>
)

function renderItems() {
  return DataStorage.getProductItems().map((item, index) => (
    <ProductItem key={index} title={item.title} image={item.image} price={item.price} />
  ))
}

DataStorage.getData()

export default Cart
