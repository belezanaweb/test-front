import React, { useContext } from 'react'
import CardDetailsContext from '../../contexts/CardDetails'
import { PaymentDataWrapper, CardInfo } from './style'

const PaymentData = () => {
    const { form } = useContext(CardDetailsContext)
    let lastNumbers = []
    for (let i = 15; i < form.cardNumber.length; i++) {
        lastNumbers.push(form.cardNumber[i])
    }

    return (
        <PaymentDataWrapper>
            {
                <CardInfo>
                    <label>****.****.****.{lastNumbers}</label>
                    <label>{form.cardholderName.toUpperCase()}</label>
                    <label>{form.expiringDate.replace("-", "/")}</label>
                </CardInfo>
            }
        </PaymentDataWrapper>
    )
}

export default PaymentData