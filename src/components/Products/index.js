import React from 'react'

/**
 * Components
 */
import { Title } from '../Utils/styles'

/**
 * Styles
 */
import {
  ContainerProducts,
  Wrapper,
  ProductWrapper,
  ProductImageWrapper,
  ProductImage,
  ProductInfoWrapper,
  ProductInfoDescription,
  ProductInfoPrice
} from './styles'

const Products = () => {
  return (
    <ContainerProducts>
      <Title>Producs</Title>
      <Wrapper>
        <ProductWrapper>
          <ProductImageWrapper>
            <ProductImage src="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png" />
          </ProductImageWrapper>
          <ProductInfoWrapper>
            <ProductInfoDescription>
              L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium L'Oréal Professionnel
              Expert Absolut Repair Cortex Lipidium L'Oréal Professionnel Expert Absolut Repair
              Cortex Lipidium L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium
            </ProductInfoDescription>
            <ProductInfoPrice>R$225,90</ProductInfoPrice>
          </ProductInfoWrapper>
        </ProductWrapper>
      </Wrapper>
    </ContainerProducts>
  )
}

export default Products
