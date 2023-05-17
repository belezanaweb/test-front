import { ContainerStyled } from "./Container.styled"
import { ContainerProps } from './Container.types'

export const Container = ({ children }: ContainerProps) => {
  return (
    <ContainerStyled>
      {children}
    </ContainerStyled>
  )
}