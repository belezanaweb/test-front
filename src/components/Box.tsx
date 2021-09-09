import React from 'react'

import { styled } from '@/style/stitches.config'
import Title from './Title'

const SpacingStyled = styled('div', {
  marginY: '10px'
})

const BoxStyled = styled('div', {
  backgroundColor: 'white',
  marginX: '10px',
  marginY: '5px',
  paddingY: '5px',
  paddingX: '15px',
  boxShadow: '1px 1px 5px $defaultShadow',
  borderRadius: '3px'
})

interface OwnProps {
  title: string
  children: JSX.Element | JSX.Element[]
}

const Box = (props: OwnProps): React.ReactElement => {
  const { title, children } = props

  return (
    <SpacingStyled>
      <Title>{title}</Title>
      <BoxStyled>{children}</BoxStyled>
    </SpacingStyled>
  )
}

export default Box
