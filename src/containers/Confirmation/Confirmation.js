import React from 'react'
import { ProductList } from '../../components/ProductList/ProductList'
import { PurchaseSummary } from '../../components/PurchaseSummary/PurchaseSummary'
import { Stepper } from '../../components/Stepper/Stepper'
import { PaymentData } from '../../components/PaymentData/PaymentData'
import { SuccessAlert } from '../../components/SuccessAlert/SuccessAlert'
import { Layout, LayoutGrid, LayoutAside, LayoutContainer } from '../../components/Layout/Layout'

const Confirmation = () => {
  return (
    <Layout>
      <Stepper steps={steps} />
      <LayoutGrid>
        <SuccessAlert>Compra efetuada com sucesso</SuccessAlert>
        <LayoutContainer>
          <PaymentData ccNumber="****.****.****.1234" ccName="José da Silva" ccExpiry="05/2019" />
          <ProductList products={products} />
        </LayoutContainer>
        <LayoutAside>
          <PurchaseSummary {...summary} />
        </LayoutAside>
      </LayoutGrid>
    </Layout>
  )
}

const steps = [
  {
    title: 'Sacola'
  },
  {
    title: 'Pagamento'
  },
  {
    active: true,
    title: 'Confirmação'
  }
]

const summary = {
  subTotal: 624.8,
  shippingTotal: 5.3,
  discount: 30,
  total: 618.9
}

const products = [
  {
    imageUrl:
      'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png',
    productTitle:
      "L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g",
    productPrice: 225.9
  },
  {
    imageUrl:
      'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/good-girl-carolina-herrera-eau-de-parfum-perfume-feminino-30ml-38273-1960525940762131267.jpg',
    productTitle: 'Good Girl Carolina Herrera Eau de Parfum - Perfume Feminino 30ml',
    productPrice: 299
  },
  {
    imageUrl:
      'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/senscience-inner-restore-intesif-deep-repairing-masque-mascara-de-tratamento-50ml-3019-7903251722539384904.png',
    productTitle: 'Senscience Inner Restore Intensif - Máscara Capilar 50ml',
    productPrice: 99.9
  }
]

export default Confirmation
