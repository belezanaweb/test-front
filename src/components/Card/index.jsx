import React from 'react'
import { CardBox } from './styled'

export default function Card(props) {
  return <CardBox>{props.children}</CardBox>
}
