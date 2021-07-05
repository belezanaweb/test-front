import * as S from "./Navigation.styles";

export const Navigation = ({ active }) => {
  return (
    <S.Nav>
      <S.UL>
        <S.LI active={active === "Sacola" ? true : false}>Sacola</S.LI>
        <S.LI active={active === "Pagamento" ? true : false}>Pagamento</S.LI>
        <S.LI active={active === "Confirmação" ? true : false}>
          Confirmação
        </S.LI>
      </S.UL>
    </S.Nav>
  );
};
