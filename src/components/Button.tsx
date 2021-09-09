import React from 'react'

import { styled, keyframes } from '@/style/stitches.config'

const onHover = keyframes({
  '0%': { backgroundColor: '$orange100' },
  '100%': { backgroundColor: '$orange300' }
})

const ButtonStyled = styled('button', {
  backgroundColor: '$orange100',
  color: 'white',
  fontSize: 20,
  fontWeight: 'bold',
  textTransform: 'uppercase',
  marginX: '10px',
  marginY: '5px',
  paddingY: '15px',
  paddingX: '15px',
  border: 'none',
  borderBottom: '4px solid $orange300',
  borderRadius: '3px',
  '&:hover': {
    animation: `${onHover} 300ms`,
    backgroundColor: '$orange300'
  }
})

interface OwnProps {
  text: string
  href?: string
}

const Box = (props: OwnProps): React.ReactElement => {
  const { text, href } = props

  console.log(href)

  return <ButtonStyled>{text}</ButtonStyled>
}

export default Box
