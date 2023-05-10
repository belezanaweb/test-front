import { FC } from 'react'
import * as S from './styles'

type CardProps = {
  title?: string
  children: React.ReactNode
}

export const Card: FC<CardProps> = ({ title, children }) => (
  <S.Container>
    {title && <S.Title>{title}</S.Title>}
    {children}
  </S.Container>
)
