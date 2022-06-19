import * as S from './styled'

const Content = ({ title, type, children, noGap }) => {
  return type === 'white' ? (
    <>
      <S.StyledContentTitle>{title}</S.StyledContentTitle>
      <S.StyledContentWhiteWrapper noGap={noGap}>{children}</S.StyledContentWhiteWrapper>
    </>
  ) : (
    <S.StyledContentWrapper>{children}</S.StyledContentWrapper>
  )
}

export default Content
