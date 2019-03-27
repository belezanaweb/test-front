import styled from 'styled-components';

export const Container = styled.div`
  font-family: "Helvetica";
  padding: 10px;

  .banner-info{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .ico{
      border-radius: 100px;
      width: 40px;
      height: 40px;
      border: 2px solid #ff7800;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    p{
      color: #ff7800;
      font-size: 14px;
      font-weight: 700;
      line-height: 17px;
      text-transform: uppercase;
      margin-top: 11px;
    }
  }

  .dados-pagamento{
    margin: 20px 0;

    h1{
      color: #999;
      font-size: 14px;
      font-weight: 700;
      line-height: 17px;
      margin: 0 0 4px 10px;
      text-transform: uppercase;
    }

    .cartao{
      padding: 14px 10px 8px 10px;
      border-radius: 3px;
      background-color: #fff;
      box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
    }
  }
`
