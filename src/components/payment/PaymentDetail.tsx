import React from 'react'

import Box from '@/components/Box'
import { styled } from '@/style/stitches.config'
import { usePayment } from '@/contexts/payment'

const SpacingStyled = styled('div', {
  marginY: '10px'
})

function PaymentDetail (): JSX.Element {
  const { paymentDetail } = usePayment()

  return (
    <Box title="Pagemento">
      <SpacingStyled>
        <div>{paymentDetail?.cardNumberHashed}</div>
        <div>{paymentDetail?.cardholder}</div>
        <div>{paymentDetail?.cardExpirationDate}</div>
      </SpacingStyled>
    </Box>
  )
}

export default PaymentDetail
