import * as S from "./Container.styles";

export const Container = ({ label, labelType = "h2", children }) => {
  return (
    <S.Wrapper>
      <S.Title type={labelType}>{label}</S.Title>
      <S.WhiteBox>{children}</S.WhiteBox>
    </S.Wrapper>
  );
};
