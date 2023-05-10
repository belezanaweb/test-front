import { FC } from 'react'
import * as S from './styles'

type Props = {
  children: React.ReactNode
}

export const ContentWrapper: FC<Props> = ({ children }) => (
  <S.Container>{children}</S.Container>
)
