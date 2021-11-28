import React from 'react'
import { Button } from '../../components/Button'
import { HeaderNav } from '../../components/HeaderNav'
import { Heading } from '../../components/Heading'
import { Product } from '../../components/Product'
import { TotalPriceModule } from '../../components/TotalPriceModule'
import * as S from './styles'

export const Checkout: React.FC = () => {
  return (
    <S.Wrapper>
      <HeaderNav />
      <S.Content>
        <Heading title="produtos" />

        <S.Products>
          <Product
            image="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png"
            description="L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g"
            price={225.9}
          />
          <Product
            image="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png"
            description="L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g"
            price={225.9}
          />
          <Product
            image="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png"
            description="L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g"
            price={225.9}
          />
        </S.Products>

        <S.Price>
          <TotalPriceModule />
        </S.Price>

        <S.Button>
          <Button />
        </S.Button>
      </S.Content>
    </S.Wrapper>
  )
}
