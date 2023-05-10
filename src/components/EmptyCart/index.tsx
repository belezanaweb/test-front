import { ShoppingBag } from 'lucide-react'

import * as S from './styles'
import { theme } from 'utils/theme'

export const EmptyCart = () => {
  return (
    <S.Container>
      <S.IconWrapper>
        <ShoppingBag size={40} color={theme.colors.gray01} />
      </S.IconWrapper>
      <S.Title>Sua sacola está vazia</S.Title>
      <S.Description>
        Você ainda não adicionou nenhum produto à sacola :(
      </S.Description>
    </S.Container>
  )
}
