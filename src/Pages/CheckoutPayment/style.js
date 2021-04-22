import styled from 'styled-components'

export const Container = styled.div`
  h2 {
    font-size: 14px;
    margin: 10px 15px;
    text-transform: uppercase;
    color: #999;
    font-weight: bold;
  }

  .info-cart {
    display: flex;
    flex-direction: column;

    background-color: #fff;
    border-radius: 3px;
    margin: 5px;
    padding: 5px 10px;

    label {
      color: #ccc;
      margin-bottom: 2px;
      font-size: 12px;
      font-weight: bold;
    }

    .input-number-cart {
      width: 100%;
    }

    .input-name-cart {
      width: 100%;
    }

    .validate-cvv {
      display: flex;
      justify-content: space-between;

      div {
        display: flex;
        flex-direction: column;

        .input-validate-cart {
          width: 170px;
        }

        .input-cvv-cart {
          width: 170px;
        }
      }
    }
  }
`
