import { currency } from "@belezanaweb/utils";
import * as S from "./PurchaseResume.styles";

export const PurchaseResume = ({
  subTotal,
  shippingTotal,
  discount,
  total,
}) => {
  return (
    <section>
      <S.Table>
        <tbody>
          <tr>
            <S.TH scope="row">Produtos</S.TH>
            <S.TD>{currency(subTotal)}</S.TD>
          </tr>
          <tr>
            <S.TH scope="row">Frete</S.TH>
            <S.TD>{currency(shippingTotal)}</S.TD>
          </tr>
          {discount && (
            <tr>
              <S.TH discount scope="row">
                Descontos
              </S.TH>
              <S.TD discount>- {currency(discount)}</S.TD>
            </tr>
          )}
        </tbody>
        <S.TFOOT>
          <tr>
            <S.TH scope="row">
              <strong>Total</strong>
            </S.TH>
            <S.TD>
              <strong>{currency(total)}</strong>
            </S.TD>
          </tr>
        </S.TFOOT>
      </S.Table>
    </section>
  );
};
