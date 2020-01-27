import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;

  .sideBar {
    background: #fff;
    padding: 10px;
    height: 100%;
    border-radius: 4px;
    margin-top: 65px;
    box-shadow: rgb(222, 218, 218) 0px 1px 2px 0px;
  }

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 360px;
    margin: auto;
    border-radius: 2px;

    .sideBar {
      background: none;
      padding: 0;
      height: 0;
      border-radius: 0;
      margin-top: 0;
      box-shadow: none;
    }
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
    display: flex;
    flex-direction: column;
    align-items: center;
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
