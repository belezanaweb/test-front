import React from 'react'
import Text from '../../atoms/Text'

import { CardContent } from './styles'

type Props = {
  children: JSX.Element | JSX.Element[]
  title: string
}

function Card({ children, title }: Props) {
  return (
    <CardContent>
      <Text type="title">{title}</Text>
      <div className="content">{children}</div>
    </CardContent>
  )
}

export default Card
