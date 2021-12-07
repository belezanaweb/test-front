import React from 'react'

import ProductsList from '../../../Components/ProductsList/ProductsList'
import Title from '../../../Components/Title/Title'
import TotalList from '../../../Components/TotalList/TotalList'
import './Cart.css'

const Cart = (props) => {
  return (
    <div className="Cart">
      <Title title="Produtos" />
      <ProductsList />
      <TotalList />
      <button onClick={() => props.onChangePage('Payment')}>SEGUIR PARA O PAGAMENTO</button>
    </div>
  )
}

export default Cart
