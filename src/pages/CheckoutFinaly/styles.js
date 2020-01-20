import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 60px;
  padding-bottom: 60px;
  border-radius: 2px;

  .ProductCartInfo {
    width: 43%;
    margin-top: -61px;
  }

  .sideBar {
    position: absolute;
    right: 7%;
    top: 110px;
  }

  @media (min-width: 1400px) {
    .sideBar {
      right: 20%;
    }
  }

  .purchaseInfo {
    background: #fff;
    width: 340px;
    padding: 10px;
    box-shadow: 0px 0px 5px 1px rgba(194, 194, 194, 1);
    border-radius: 4px;

    p {
      color: #000;
      text-transform: uppercase;
      line-height: 1.3;
    }
  }

  .title {
    margin-top: 18px;
  }

  .completedPurchase {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 48px;
    display: none;

    svg {
      width: 40px;
      height: 40px;
      color: #ff7800;
      border: 1px solid #ff7800;
      border-radius: 50px;
      margin-bottom: 10px;
    }

    p {
      text-transform: uppercase;
      color: #ff7800;
      font-size: 14px;
      font-weight: bold;
    }
  }

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 360px;
    margin: auto;
    padding-bottom: 60px;
    border-radius: 2px;

    .sideBar {
      position: unset;
    }

    .ProductCartInfo {
      width: 341px;
      margin-top: 20px;
    }

    .purchaseInfo {
      background: #fff;
      width: 340px;
      padding: 10px;
      box-shadow: 0px 0px 5px 1px rgba(194, 194, 194, 1);

      p {
        color: #000;
        text-transform: uppercase;
        line-height: 1.3;
      }
    }

    .title {
      margin-top: 18px;
    }

    .completedPurchase {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-top: 48px;

      svg {
        width: 40px;
        height: 40px;
        color: #ff7800;
        border: 1px solid #ff7800;
        border-radius: 50px;
        margin-bottom: 10px;
      }

      p {
        text-transform: uppercase;
        color: #ff7800;
        font-size: 14px;
        font-weight: bold;
      }
    }
  }
`
