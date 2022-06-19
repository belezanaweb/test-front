import * as S from './styled'

export const Header = ({ activeItem, headerItems }) => {
  // const headerItems = ['sacola', 'pagamento', 'confirmação']
  
  return (
    <S.StyledHeader>
      {headerItems.map((item) => <S.HeaderItem key={item} active={activeItem === item}>{item}</S.HeaderItem>)}
    </S.StyledHeader>
  )
}