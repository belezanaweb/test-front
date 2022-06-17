import * as S from './styled'

export const Header = ({ activeItem }) => {
  const headerItems = ['sacola', 'pagamento', 'confirmação']
  
  return (
    <S.StyledHeader>
      {headerItems.map((item) => {
        return (
          <S.HeaderItem key={item} active={activeItem === item}>{item}</S.HeaderItem>
        )
      })}
    </S.StyledHeader>
  )
}