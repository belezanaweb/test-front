import React, { useContext } from 'react'
import { TransactionContext } from '../../../core/providers/Context'
import { ContainerWowMomentText } from './WowMoment.style'
import SuccessIcon from '../../../assets/success_icon.png'
import TitleSection from '../../components/layout/TitleSection'
import SliceCartItems from '../../components/slices/CartItems.slices'
import SliceCartCheckoutInfo from '../../components/slices/CartCheckoutInfo.slices'
import PaymentInfo from '../../components/slices/PaymentInfo.slices'

const WowMoment = () => {
  const [transaction] = useContext(TransactionContext)

  const { creditCard } = transaction
  const fallbackData = 'waiting data...'

  const hideInfoCreditCard = () => {
    if (transaction.creditCard) {
      const fullNumber = creditCard.number
      const handleFullNumber = fullNumber.match(/.{1,4}/g)
      return handleFullNumber
        ?.join('.')
        .split('.')
        .map((elem, ind) => (ind === 3 ? elem : '****'))
        .join('.')
    }
    return fallbackData
  }

  return (
    <>
      <ContainerWowMomentText>
        <img src={SuccessIcon} alt="asd" />
        <h2>Compra efetuada com Sucesso</h2>
      </ContainerWowMomentText>
      <TitleSection title="Pagamento" />
      <PaymentInfo
        number={creditCard ? hideInfoCreditCard() : fallbackData}
        name={creditCard ? creditCard.name : fallbackData}
        expiration={creditCard ? creditCard.expiration : fallbackData}
      ></PaymentInfo>
      <TitleSection title="Produtos" />
      <SliceCartItems transaction={transaction} />
      <SliceCartCheckoutInfo transaction={transaction} />
    </>
  )
}

export default WowMoment
