import styled from 'styled-components'

export const PriceBox = styled.div`
  margin-top: 15px;
  box-sizing: border-box;
  border-radius: 3px;
  border: 1px solid #ccc;
  padding: 10px;
  .price {
    margin-top: 5px;
    font-family: 'Helvetica Neue';
    color: ${(props) => (props.discount ? '#FF7800' : '#212122')};
    text-align: right;
  }
  .text {
    color: ${(props) => (props.discount ? '#FF7800' : '#212122')};
    margin-top: 5px;
    font-family: 'Helvetica Neue';
  }

  .desconto {
    .price,
    .text {
      color: #ff7800;
      font-size: 15px;
    }
  }
  .preco {
    .price,
    .text {
      font-weight: bold;
    }
  }
`
