import * as S from './styled'

export const Content = ({ title, type, children }) => {

  if(type ==='white') return (
    <>
      <S.StyledContentTitle>{title}</S.StyledContentTitle>
      <S.StyledContentWhiteWrapper>{children}</S.StyledContentWhiteWrapper>
    </>
  )

  return <S.StyledContentWrapper>{children}</S.StyledContentWrapper>

}