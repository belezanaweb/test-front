import React from 'react'

import { Title, TextComponent } from './styles'

type Props = {
  children: string,
  type: 'title' | 'text'
}

function Text({ children, type }: Props) {
  return (
    <>{type === 'title' ? <Title>{children}</Title> : <TextComponent>{children}</TextComponent>}</>
  )
}

export default Text
