import React from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'

import { styled } from '@/style/stitches.config'

const SuccessMessageStyled = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginY: '15px'
})

const SuccessMessageTextStyled = styled('span', {
  display: 'flex',
  justifyContent: 'center',
  marginY: '5px',
  fontSize: 14,
  fontWeight: 'bold',
  textTransform: 'uppercase',
  color: '$orange100'
})

function SuccessMessage (): JSX.Element {
  return (
    <SuccessMessageStyled>
      <AiOutlineCheckCircle size="48px" color="#FF7800" />
      <SuccessMessageTextStyled>Compra efetuada com sucesso</SuccessMessageTextStyled>
    </SuccessMessageStyled>
  )
}

export default SuccessMessage
