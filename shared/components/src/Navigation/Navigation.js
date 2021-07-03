import * as S from "./Navigation.styles";

export const Navigation = () => {
  return (
    <S.Nav>
      <S.UL>
        <S.LI active>Sacola</S.LI>
        <S.LI>Pagamento</S.LI>
        <S.LI>Confirmação</S.LI>
      </S.UL>
    </S.Nav>
  );
};
