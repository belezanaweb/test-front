import * as S from "./PaymentDetails.styles";

export const PaymentDetails = ({ cardNumber, cardOwner, cardValidation }) => {
  return (
    <S.UL>
      <S.LI>{cardNumber}</S.LI>
      <S.LI>{cardOwner}</S.LI>
      <S.LI>{cardValidation}</S.LI>
    </S.UL>
  );
};
