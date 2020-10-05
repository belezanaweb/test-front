import styled from 'styled-components';

export const Container = styled.div`

`;

export const Message = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 12px 0 20.43px 0;

  img {
    width: 39.51px;
    height: 39.51px;
  }

  h1 {
    color: var(--color-orange);
    font-size: 14px;
    font-weight: bold;
    line-height: 17px;
    margin-top: 11.06px;
  }
`;

export const PaymentInfoElement = styled.div`
  margin-bottom: 14px;

  h2 {
    color: var(--color-gray-dark);
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    padding: 10px 21px 5px 11px;
  }

  & > div {
    background: var(--color-white);
    box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
    padding: 14px 20px 14px 10px;

    p {
      font-size: 14px;
      line-height: 17px;
      text-transform: uppercase;
    }
  }
`;
