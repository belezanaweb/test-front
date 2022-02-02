import React from 'react'
import { Title, BoxCard } from './styles'
import BoxProducts from '../BoxProduct'
import FormCreditCard from '../FormCreditCard'

/**
 *  Function to render default card
 *  @property {string} title - title of the card
 *  @property {vector[]} products - vector of products
 *  @property {form} form - form of the card
 */

export default function CardDefault({ title, products, form }) {
  return (
    <div>
      <Title>{title}</Title>
      <BoxCard>
        {products && <BoxProducts products={products} />}
        {form && <FormCreditCard />}
      </BoxCard>
    </div>
  )
}
