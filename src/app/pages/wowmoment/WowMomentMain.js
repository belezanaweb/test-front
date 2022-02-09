import React, { useContext } from 'react'
import { TransactionContext } from '../../../core/store/Context'
import TitleSection from '../../components/layout/TitleSection'
import SliceCartItems from '../../components/slices/CartItems.slices'
import SliceCartCheckoutInfo from '../../components/slices/CartCheckoutInfo.slices'

const WowMoment = () => {
  const [transaction] = useContext(TransactionContext)

  const { creditCard } = transaction

  console.log('WOW-Moment', transaction)

  const hideInfoCreditCard = () => {
    const fullNumber = creditCard.number
    const handleFullNumber = fullNumber.match(/.{1,4}/g)
    if (creditCard.number) {
      return handleFullNumber
        .join('.')
        .split('.')
        .map((elem, ind) => (ind === 3 ? elem : '****'))
        .join('.')
    }
    return 'waiting data...'
  }

  return (
    <>
      <TitleSection title="Pagamento" />
      <p>INFO PAGAMENTOS</p>
      <ul>
        <li>{hideInfoCreditCard()}</li>
        <li>{creditCard.name}</li>
        <li>{creditCard.expiration}</li>
      </ul>
      <TitleSection title="Produtos" />
      <SliceCartItems transaction={transaction} />
      <SliceCartCheckoutInfo transaction={transaction} />
    </>
  )
}

export default WowMoment
