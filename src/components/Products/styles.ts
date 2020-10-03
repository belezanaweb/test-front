import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    color: var(--color-gray-dark);
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    padding: 10px 21px 5px 11px;
  }
`;

export const ProductsContainer = styled.div`
  background: var(--color-white);
  box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
  padding: 12px 12px 13px 13px;
`;

export const Product = styled.div`
  background: var(--color-white);
  margin-top: 15px;

  &:first-child {
    margin-top: 0;
  }

  & > div {
    display: flex;
    border: 1px solid var(--color-background);
    border-radius: 3px;
    padding: 11px 10px 14px 10px;
  }
`;

export const ProductImage = styled.img`
  height: 65px;
  min-width: 65px;
  margin-right: 11px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: var(--color-black);
    font-size: 13px;
    line-height: 16px;
  }

  span {
    align-self: flex-end;
    font-size: 14px;
    font-weight: bold;
    line-height: 17px;
    margin-top: 15px;
  }
`;
