import styled, { css } from "styled-components";
import { CartInfoItemColumnType, CartInfoItemRowType, CartInfoProps } from "../../types";

export function CartInfo({ subTotal, shippingTotal, discount }: CartInfoProps) {
  return (
    <Component>
      <ItemRow marginBottom="9px">
        <ItemColumn>Produtos</ItemColumn>
        <ItemColumn>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(subTotal)}
        </ItemColumn>
      </ItemRow>
      <ItemRow marginBottom="8px">
        <ItemColumn>Frete</ItemColumn>
        <ItemColumn>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(shippingTotal)}
        </ItemColumn>
      </ItemRow>
      <ItemRow marginBottom="16px">
        <ItemColumn isHighlighted>Desconto</ItemColumn>
        <ItemColumn isHighlighted>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(discount)}
        </ItemColumn>
      </ItemRow>
      <ItemRow>
        <ItemColumn isBold>Total</ItemColumn>
        <ItemColumn isBold>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(subTotal + shippingTotal - discount)}
        </ItemColumn>
      </ItemRow>
    </Component>
  );
}

const Component = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 3px;
  padding: 15px 13px 13px 14px;
  margin-bottom: 20px;
`;

const ItemRow = styled.div<CartInfoItemRowType>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  line-height: 17px;

  ${({ marginBottom }) => css`
    margin-bottom: ${marginBottom};
  `};

  @media screen and (min-width: ${({ theme }) => theme.deviceSize.tabletMin}) {
    font-size: 16px;
    line-height: 19px;
  }
`;

const ItemColumn = styled.p<CartInfoItemColumnType>`
  text-transform: uppercase;
  color: ${({ isHighlighted, theme }) => isHighlighted ? theme.colors.orange300 : theme.colors.black400};

  ${({ isBold }) => isBold && css`
    font-weight: bold;
  `};
`;
