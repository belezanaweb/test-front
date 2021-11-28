import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import { Product, ProductProps } from '.'

export default {
  title: 'Product',
  component: Product,
  parameters: {
    layout: 'fullscreen'
  }
}

export const Basic: Story<ProductProps> = args => <Product {...args} />

Basic.args = {
  image:
    'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png',
  description:
    "L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g",
  price: 225.9
}
