import React, { useContext } from 'react';
import { BillingContext } from '../../contexts/BillingContext'
import Heading from '../Heading';
import style from './style.module.scss'

const PaymentData: React.FC = () => {

  const { cardData } = useContext(BillingContext)

  const { numbers, name, expirationDate } = cardData

  const lastNumbers = (cardNumbers: string) => {
    return cardNumbers && `****.****.****.${cardNumbers.substr(-4)}`
  }

  return (
    <div className={style.area}>
      <Heading>Pagamento</Heading>
      <div className={style.container} data-testid="paymentData-test">
        <p className={style.item}>{lastNumbers(numbers)}</p>
        <p className={style.item}>{name}</p>
        <p className={style.item}>{expirationDate}</p>
      </div>
    </div>
  );
}

export default PaymentData;