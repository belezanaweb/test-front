import styled from 'styled-components';

export const Container = styled.div`

  font-family: "Helvetica";
  color: #212122;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  text-transform: uppercase;

  .frame{
    padding: 15px 13px 13px 14px;
    border-radius: 3px;
    border: 1px solid #CCC;
    margin: 20px 0;

    p{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .frete{
    margin-top: 9px;
  }

  .desconto{
    margin-top: 8px;
    color: #FF7800;
  }

  .total{
    font-weight: 700;
    margin-top: 16px;
  }

`
