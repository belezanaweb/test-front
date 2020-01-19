import styled from 'styled-components'; // eslint-disable-line import/no-extraneous-dependencies

const CheckoutStyled = styled.div`
  .checkout {
    display: flex;
    justify-content: space-between;
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
  .total {
    margin-top: 20px;
  }
  .item {
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
    &:not(:last-child) {
      margin-bottom: 15px;
    }

    img {
      margin-right: 10px;
    }
  }
`;

export default CheckoutStyled;
