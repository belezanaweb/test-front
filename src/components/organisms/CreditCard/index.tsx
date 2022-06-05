import React from 'react'

import { SectionForm } from './styles'

import Card from '../../molecules/Card'
import FormCreditCard from '../../molecules/FormCreditCard'

function CreditCard() {
  return (
    <SectionForm>
      <Card title="Cartão de crédito">
        <FormCreditCard />
      </Card>
    </SectionForm>
  )
}

export default CreditCard
