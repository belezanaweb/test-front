import React from 'react'

import { Content } from './styles'

type Props = {
  children: JSX.Element | JSX.Element[]
}

export default function Container({ children }: Props) {
  return <main>{children}</main>
}
