import React from 'react'
import { Title, BoxCard } from './styles'
import BoxProducts from '../BoxProduct'
import FormCreditCard from '../FormCreditCard'

/**
 *  Function to render default card
 *  @property {string} type - type show card
 *  @property {vector[]} products - vector of products
 */

export default function CardDefault({ title, type }) {
  return (
    <div>
      <Title>{title}</Title>
      <BoxCard>
        {type === 'product' && <BoxProducts />}
        {type === 'form' && <FormCreditCard />}
      </BoxCard>
    </div>
  )
}
