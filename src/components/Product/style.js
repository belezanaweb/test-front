import styled from 'styled-components'; // eslint-disable-line import/no-extraneous-dependencies

const ProductStyled = styled.div`
  display: flex;
  padding: 12px;
  border-radius: 3px;
  border: 1px solid #eee;
  > div {
    width: 100%;
  }
  .price {
    text-align: right;
    display: block;
    margin-top: 15px;
  }

  &:not(:last-of-type) {
    margin-bottom: 15px;
  }
  img {
    margin-right: 10px;
  }
`;

export default ProductStyled;
