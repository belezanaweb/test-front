import React from 'react'
import { DivContainer } from './style'

type Props = {
  children?: React.ReactNode
}

export const Container: React.FC<Props> = ({ children }) => {
  return <DivContainer>{children}</DivContainer>
}
