import React from 'react'
import { Title, BoxCard } from './styles'
import BoxProducts from '../BoxProduct'
import FormCreditCard from '../FormCreditCard'
import CardRegister from '../CardRegister'

/**
 *  Function to render default card
 *  @property {string} type - type show card
 *  @property {string} title - title card default
 */

export default function CardDefault({ title, type }) {
  return (
    <div>
      <Title>{title}</Title>
      <BoxCard>
        {type === 'product' && <BoxProducts />}
        {type === 'form' && <FormCreditCard />}
        {type === 'payment' && <CardRegister />}
      </BoxCard>
    </div>
  )
}
