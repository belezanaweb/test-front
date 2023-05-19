import { PropsWithChildren } from 'react'

import { ContainerStyled } from './Container.styled'

export const Container = ({ children }: PropsWithChildren) => {
  return <ContainerStyled>{children}</ContainerStyled>
}
