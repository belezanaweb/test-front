import ProductList from './ProductList'
import React from 'react'
import renderer from 'react-test-renderer'
import BasketProvider, { useBasketContext } from '../../context/Basket'

const product = {
  quantity: 1,
  product: {
    sku: '24410',
    name: "L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g",
    imageObjects: [
      {
        featured: true,
        thumbnail:
          'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png',
        small:
          'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png',
        medium:
          'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/6/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png',
        large:
          'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/4/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png',
        extraLarge:
          'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/5/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png',
        valid: true
      }
    ],
    priceSpecification: {
      sku: '24410',
      price: 225.9,
      originalPrice: 225.9,
      maxPrice: 243.9,
      percent: 7,
      discount: 18
    }
  }
}

function ProductListTest({ hidePrice }) {
  return (
    <BasketProvider>
      <ProductList hidePrice={hidePrice}></ProductList>
    </BasketProvider>
  )
}

beforeAll(() => {
  const basket = useBasketContext()
  basket.setIsLoading(false)
  basket.setItems([product])
  basket.setPaymentInfo({})
  basket.setAmounts({
    subTotal: 0,
    shippingTotal: 0,
    discount: 0,
    total: 0
  })
})

test('should create a ProductList component', function () {
  const component = renderer.create(
    <>
      <ProductListTest hidePrice />
    </>
  )
  expect(component).toBeDefined()
})
