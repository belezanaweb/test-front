import { Button, Card } from 'components'
import { useCheckoutContext } from 'context/checkout.context'
import React, { FC, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { PaymentInfoStyled } from './payment-info.style'

export const PaymentInfo: FC<{ children?: never }> = () => {
  const {
    paymentInfo: { number, name, expDate }, setPaymentInfo
  } = useCheckoutContext()

  const maskedNumber = useMemo(() => {
    const last = number.split('.')?.[3] ?? ''
    return `****.****.****.${last}`
  }, [number])

  const [toggleMasked, setToggleMasked] = useState(true)

  const mockData = () => setPaymentInfo({
    number: '1111.2222.3333.4444',
    name: 'José da Silva',
    expDate: '03/2028',
    cvv: '202'
  })

  return number && name && expDate ? (
    <PaymentInfoStyled onClick={() => setToggleMasked(!toggleMasked)} style={{ cursor: 'pointer' }}>
      <p>{toggleMasked ? maskedNumber : number}</p>
      <p>{name.toUpperCase()}</p>
      <p>{expDate}</p>
    </PaymentInfoStyled>
  ) : (
    <Card>
      <p>Parece que você não preencheu os dados do cartão.</p>
      <Button as={Link} to='/payment'>Voltar</Button>
      <Button onClick={() => mockData()}>Simular dados</Button>
    </Card>
  )
}
