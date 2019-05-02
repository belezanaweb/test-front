import styled from 'styled-components';

export const Result = styled.div`
  margin: 12px 0 11px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;

  @media(min-width: ${props => props.theme.screenSizes.tablet}px) {
    margin: 20px 0;
  }
`;

export const IconSuccess = styled.div`
  text-align: center;
  width: 39px;
  height: 39px;
  margin: 0 auto;
  padding-top: 11px;
  border-radius: 50%;
  border: 2px solid ${props => props.theme.color.orange};
`;

export const TextResult = styled.p`
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  margin-top: 12px;
  text-transform: uppercase;
  color: ${props => props.theme.color.orange};
`;

export const PaymentCard = styled.div`

  p {
    color: #000;
    font-size: 14px;
    line-height: 17px;
    text-transform: uppercase;
  }
`;
