import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  .message-done {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-transform: uppercase;
    color: #ff7800;
    font-weight: bold;
    margin: 15px;
    font-size: 14px;
    text-align: center;

    svg {
      margin-bottom: 10px;
    }
  }

  h2.title-payment {
    font-size: 14px;
    margin: 5px 15px;
    text-transform: uppercase;
    color: #999;
    font-weight: bold;
  }

  .info-cart-user {
    margin: 5px 5px 15px 5px;
    display: flex;
    flex-direction: column;
    background: #fff;
    color: #000;
    border-radius: 3px;
    padding: 15px;
  }

  > div {
    margin-bottom: 30px;
  }
`
