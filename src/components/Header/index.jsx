import * as S from './styled'

const Header = ({ activeItem, headerItems }) => {
  return (
    <S.StyledHeader>
      {headerItems.map((item) => (
        <S.HeaderItem key={item} active={activeItem === item}>
          {item}
        </S.HeaderItem>
      ))}
    </S.StyledHeader>
  )
}

export default Header
