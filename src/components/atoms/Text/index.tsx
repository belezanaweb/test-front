import React from 'react'

import { Title, TextComponent } from './styles'

export type Props = {
  children: string
  type: 'title' | 'text' | 'discount' | 'total'
}

function Text({ children, type }: Props) {
  return (
    <>
      {type === 'title' ? (
        <Title>{children}</Title>
      ) : (
        <TextComponent type={type}>{children}</TextComponent>
      )}
    </>
  )
}

export default Text
