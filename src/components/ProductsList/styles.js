import styled from 'styled-components';

export const Products = styled.div`
  box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
  background-color: #FFF;
  padding: 12px;
  margin-bottom: 20px;
`;

export const Product = styled.div`
  border: 1px solid #EEE;
  padding: 14px 10px;
  display: flex;
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ProductDetails = styled.div`
  color: #212122;
`;

export const ProductName = styled.h3`
  font-size: 13px;
  line-height: 16px;
  font-weight: normal;
  margin-bottom: 15px;
`;

export const ProductPrice = styled.h4`
  font-size: 14px;
  line-height: 17px;
  font-weight: bold;
`
