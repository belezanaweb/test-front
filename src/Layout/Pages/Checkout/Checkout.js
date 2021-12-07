import React from 'react'

import PaymentView from '../../../Components/PaymentView/PaymentView'
import ProductsList from '../../../Components/ProductsList/ProductsList'
import Title from '../../../Components/Title/Title'
import TotalList from '../../../Components/TotalList/TotalList'
import ResultMessage from '../../../Components/ResultMessage/ResultMessage'

const Checkout = () => {
  return (
    <div className="Checkout">
      <ResultMessage status={true} message="Compra efetuada com sucesso" />
      <Title title="Pagamento" />
      <PaymentView />
      <Title title="Produtos" />
      <ProductsList />
      <TotalList />
    </div>
  )
}

export default Checkout
