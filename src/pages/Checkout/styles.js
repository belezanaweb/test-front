import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  .product-list {
    border-radius: 3px;
    background-color: #FFF;
    box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
    padding: 15px;
  }

  .product {
    height: 90px;
    box-sizing: border-box;
    border-radius: 3px;
    border: 1px solid #EEE;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0;
    padding: 10px;

    &:first-child, &:last-child {
      margin: 0;
    }

    img {
      height: 65px;
      width: 65px;
      margin-right: 10px;
    }

    h6 {
      color: #212122;
      font-size: 13px;
      line-height: 16px;
    }

    b {
      color: #212122;
      font-size: 14px;
      font-weight: 700;
      line-height: 17px;
      text-align: right;
      display: block;
    }
  }
`;
