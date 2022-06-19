import * as S from './styled'

const Content = ({ title, type, children }) => {
  return type === 'white' ? (
    <>
      <S.StyledContentTitle>{title}</S.StyledContentTitle>
      <S.StyledContentWhiteWrapper>{children}</S.StyledContentWhiteWrapper>
    </>
  ) : (
    <S.StyledContentWrapper>{children}</S.StyledContentWrapper>
  )
}

export default Content
