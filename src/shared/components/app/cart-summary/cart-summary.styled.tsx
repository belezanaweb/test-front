import styled from 'styled-components/macro';

export const CartSummary = styled.dl`
  border: 0.1rem solid ${(props) => props.theme.cartSummary.borderColor};
  border-radius: 0.3rem;
  display: flex;
  flex-direction: row;
  flex-flow: wrap row;
  overflow: hidden;
  padding: 1.5rem 1.2rem;
  margin-bottom: -0.8rem;
  width: 100%;
`;

export const Label = styled.dt`
  color: ${(props) => props.theme.cartSummary.label.color};
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
  text-transform: uppercase;
  width: 50%;
`;

export const Value = styled.dd`
  color: ${(props) => props.theme.cartSummary.value.color};
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
  text-align: right;
  width: 50%;
`;

export const DiscountLabel = styled(Label)`
  color: ${(props) => props.theme.cartSummary.discount.color};
`;

export const DiscountValue = styled(Value)`
  color: ${(props) => props.theme.cartSummary.discount.color};
`;

export const TotalLabel = styled(Label)`
  font-weight: 700;
  margin-bottom: 0;
`;

export const TotalValue = styled(Value)`
  font-weight: 700;
  margin-bottom: 0;
`;
