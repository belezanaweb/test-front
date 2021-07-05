import * as S from "./Banner.styles";

export const Banner = ({ icon, status = "success", message }) => {
  return (
    <S.Wrapper>
      <S.Icon>
        <S.Image src={icon} alt={`Icone de ${status}`} />
      </S.Icon>
      <S.H1>{message}</S.H1>
    </S.Wrapper>
  );
};
