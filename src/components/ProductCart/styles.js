import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin-right: 40px;
  position: relative;
  left: 20px;

  @media (max-width: 600px) {
    margin-right: 20px;
  }
`

export const Producs = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 5px 1px rgba(194, 194, 194, 1);

  .produc {
    display: flex;
    justify-content: space-between;
    padding: 25px 20px;
    width: 95%;
    border-bottom: 1px solid #eee;
    margin: 0 auto;

    img {
      width: 90px;
      height: 90px;
      display: flex;
      justify-content: center;
      align-items: center;
      object-fit: contain;
    }

    div {
      width: 100%;
      margin-left: 10px;

      .name {
        font-size: 18px;
        line-height: 1.5;
        color: #212122;
      }

      .price {
        font-size: 18px;
        color: #212122;
        font-weight: bold;
        text-align: right;
        margin-top: 10px;
      }
    }
  }

  @media (max-width: 600px) {
    width: 341px;
    background: #fff;
    padding: 1px 0;
    border-radius: 4px;
    box-shadow: 0px 0px 5px 1px rgba(194, 194, 194, 1);

    .produc {
      height: 100px;
      width: 316px;
      display: flex;
      padding: 10px;
      margin: 12px;
      border: 1px solid #eee;
      border-radius: 4px;

      img {
        width: 65px;
        height: 65px;
        display: flex;
        justify-content: center;
        align-items: center;
        object-fit: contain;
      }

      div {
        width: 220px;
        margin-left: 10px;

        .name {
          font-size: 13px;
          color: #212122;
        }

        .price {
          font-size: 14px;
          color: #212122;
          font-weight: bold;
          text-align: right;
          margin-top: 10px;
        }
      }
    }
  }
`
