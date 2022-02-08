import React, { useEffect } from 'react'
import apiCart from '../../../core/api/api.cart'
import { TransactionContext } from '../../../core/store/Context'
import TitleSection from '../../components/layout/TitleSection'
import { ContainerProducts } from './CartPage.style'

const Cart = () => {
  const [transaction, setTransaction] = React.useContext(TransactionContext)

  useEffect(() => {
    apiCart.getCartData.then(async (response) => {
      const data = await response.data
      setTransaction(data)
    })
  }, [setTransaction])

  console.log('transaction', transaction)

  return (
    <>
      <TitleSection title="Produtos" />
      <ContainerProducts>
        <ul>
          {transaction.items.map((list) => {
            return (
              <li key={list.product.sku}>
                <img src={list.product.imageObjects[0].thumbnail} alt={list.product.name} />
                <p>{list.product.name}</p>
                <strong>R$ {list.product.priceSpecification.price}</strong>
              </li>
            )
          })}
        </ul>
      </ContainerProducts>
    </>
  )
}

export default Cart
