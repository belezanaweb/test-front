import React, { createContext, useContext, useState } from 'react'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IPaymentDetail } from '@/entities/Payment'

export type PaymentContextType = {
  paymentDetail: IPaymentDetail | null
  storePaymentDetail: (paymentDetail: IPaymentDetail) => Promise<IPaymentDetail>
}

const PaymentContext = createContext<PaymentContextType>({
  paymentDetail: null,
  storePaymentDetail: async () =>
    Promise.resolve({ cardExpirationDate: '', cardNumberHashed: '', cardholder: '' })
})

interface OwnProps {
  children: React.ReactElement
}

export default function PaymentProvider (props: OwnProps): React.ReactElement {
  const { children } = props

  const [paymentDetail, setPaymentDetail] = useState<IPaymentDetail | null>(null)

  const storePaymentDetail = async (paymentDetail: IPaymentDetail): Promise<IPaymentDetail> => {
    let cardNumberHashed = paymentDetail.cardNumberHashed

    const isCardNumberHashed = paymentDetail.cardNumberHashed.includes('*')
    if (!isCardNumberHashed) {
      cardNumberHashed = `****.****.****.${cardNumberHashed.substr(-4)}`
    }

    setPaymentDetail({
      cardholder: paymentDetail.cardholder,
      cardExpirationDate: paymentDetail.cardExpirationDate,
      cardNumberHashed
    })

    return await Promise.resolve({
      cardholder: paymentDetail.cardholder,
      cardExpirationDate: paymentDetail.cardExpirationDate,
      cardNumberHashed
    })
  }

  return (
    <PaymentContext.Provider
      value={{
        paymentDetail,
        storePaymentDetail
      }}
    >
      {children}
    </PaymentContext.Provider>
  )
}

export function usePayment (): PaymentContextType {
  const context = useContext(PaymentContext)
  if (!context) throw new Error('usePaymentDetail must be used within a PaymentProvider')
  const { paymentDetail, storePaymentDetail } = context
  return { paymentDetail, storePaymentDetail }
}
