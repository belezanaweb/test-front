import styled from 'styled-components';

export const Container = styled.div`

  font-family: "Helvetica";

  h1{
    color: #999;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    margin: 0 0 6px 10px;
    text-transform: uppercase;
  }

  .card{
    padding: 12px;
    border-radius: 3px;
    background-color: #fff;
    box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);

    .item{
      border-radius: 3px;
      padding: 12px;
      border: 1px solid #eee;
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .detalhe{
        margin-left: 10px;
        display: flex;
        flex-direction: column;

        .desc{
          color: #212122;
          font-size: 13px;
          line-height: 16px;
        }
        .preco{
          color: #212122;
          font-size: 14px;
          font-weight: 700;
          line-height: 17px;
          align-self: flex-end;
        }
      }


      &:last-child{
        margin-bottom: 0;
      }
    }
  }

`
