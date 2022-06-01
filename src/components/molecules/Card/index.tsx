import React from 'react'
import Text from '../../atoms/Text'

import { CardContent } from './styles'

type Props = {
  children: JSX.Element | JSX.Element[],
  title: string
}

function Card({ children, title }: Props) {
  return (
    <section>
      <Text type="title">{title}</Text>
      <CardContent>{children}</CardContent>
    </section>
  )
}

export default Card
