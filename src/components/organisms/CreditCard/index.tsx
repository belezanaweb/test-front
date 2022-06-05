import React from 'react'

import Card from '../../molecules/Card'
import FormCreditCard from '../../molecules/FormCreditCard'

function CreditCard() {
  return (
    <section>
      <Card title="Cartão de crédito">
        <FormCreditCard />
      </Card>
    </section>
  )
}

export default CreditCard
