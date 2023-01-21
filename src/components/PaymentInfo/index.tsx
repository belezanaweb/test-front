import styled from "styled-components";
import { usePaymentData } from "../../services/hooks/cart/usePaymentData";
import { Card } from "../../theme/styles";

export function PaymentInfo() {
  const { data } = usePaymentData();

  return (
    <Card padding="14px 10px 10px">
      <PaymentText>{data.cardNumber}</PaymentText>
      <PaymentText>{data.cardName}</PaymentText>
      <PaymentText>{data.cardValidThrough}</PaymentText>
    </Card>
  );
}

const PaymentText = styled.p`
  color: ${({ theme }) => theme.colors.black800};
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;

  @media screen and (min-width: ${({ theme }) => theme.deviceSize.tabletMin}) {
    font-size: 16px;
    line-height: 19px;
  }
`;
