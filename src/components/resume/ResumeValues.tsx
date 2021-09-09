import React from 'react'

import { styled } from '@/style/stitches.config'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import formatNumberToReal from '@/utils/formaNumberToReal'
import { useCart } from '@/contexts/cart'

const SpacingStyled = styled('div', {
  marginY: '10px',
  variants: {
    size: {
      largeDevice: {
        width: '100%',
        flexShrink: '2'
      }
    }
  }
})

const ResumeValueStyled = styled('div', {
  backgroundColor: 'transparent',
  marginX: '10px',
  paddingX: '15px',
  paddingY: '5px',
  border: '1px solid $gray200',
  borderRadius: '3px',
  fontSize: 14
})

const ResumeValueContainerStyled = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  marginY: '10px',
  variants: {
    color: {
      discount: {
        color: '$orange100'
      }
    },
    size: {
      total: {
        marginTop: '20px',
        fontWeight: 'bold'
      }
    }
  }
})

const ResumeValues = (): JSX.Element | null => {
  const { cart } = useCart()

  if (!cart) return null

  const finalPrice = cart.subTotal + cart.shippingTotal - cart.discount

  return (
    <SpacingStyled size={{ '@xl': 'largeDevice' }}>
      <ResumeValueStyled>
        <ResumeValueContainerStyled>
          <span>PRODUTOS</span>
          <span>{formatNumberToReal(cart.subTotal)}</span>
        </ResumeValueContainerStyled>
        <ResumeValueContainerStyled>
          <span>FRETE</span>
          <span>{formatNumberToReal(cart.shippingTotal)}</span>
        </ResumeValueContainerStyled>
        <ResumeValueContainerStyled color="discount">
          <span>DESCONTO</span>
          <span>- {formatNumberToReal(cart.discount)}</span>
        </ResumeValueContainerStyled>
        <ResumeValueContainerStyled size="total">
          <span>TOTAL</span>
          <span>{formatNumberToReal(finalPrice)}</span>
        </ResumeValueContainerStyled>
      </ResumeValueStyled>
    </SpacingStyled>
  )
}

export default ResumeValues
