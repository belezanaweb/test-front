import { FC } from 'react'
import * as S from './styles'

type Props = {
  children: React.ReactNode
}

export const PageContainer: FC<Props> = ({ children }) => (
  <S.Container>{children}</S.Container>
)
