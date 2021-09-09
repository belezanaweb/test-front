import React, { useEffect } from 'react'

import ProductList from '@/components/products/ProductList'
import ResumeValues from '@/components/resume/ResumeValues'
import Button from '@/components/Button'

import { StepPathname } from '@/entities/Step'
import { useCart } from '@/contexts/cart'

import { styled } from '@/style/stitches.config'

const FlexStyled = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  variants: {
    size: {
      largeDevice: {
        flexDirection: 'row',
        alignItems: 'center'
      }
    }
  }
})

function Cart (): React.ReactElement | null {
  const { loadCart } = useCart()

  useEffect(() => {
    loadCart()
  }, [])

  return (
    <>
      <FlexStyled
        size={{
          '@xl': 'largeDevice'
        }}
      >
        <ProductList />
        <ResumeValues />
      </FlexStyled>
      <Button text="Seguir para o pagamento" href={StepPathname.Pagamento} />
    </>
  )
}

export default Cart
