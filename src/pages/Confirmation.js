import React from 'react'

import CustomNavbar from '../components/custom-navbar'
import ProductCard from '../components/product-card'
import ResumeCard from '../components/resume-card'
import ProductItem from '../components/product-item'
import DataStorage from '../data/data-storage'

const Confirmation = () => (
  <div>
    <CustomNavbar current_page="confirmation" />
    <ProductCard title="Pagamento">
      <span className="font-bold">****.****.****.1234</span>
      <span className="font-bold">JOSÉ DA SILVA</span>
      <span className="font-bold">05/2019</span>
    </ProductCard>
    <ProductCard title="Produtos">{renderItems()}</ProductCard>
    <ResumeCard values={DataStorage.getResume()}></ResumeCard>
  </div>
)

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

export default Confirmation
