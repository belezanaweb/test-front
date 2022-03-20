import React from 'react'
import Header from '../../components/Header/Header'
import Title from '../../components/Title/Title'
import Button from '../../components/Button/Button'

const Payment = () => {
  return (
    <div>
      <Header page={1} />
      <Title text="PRODUTOS" />
      <Button text="SEGUIR PARA O PAGAMENTO" />
    </div>
  )
}

export default Payment
