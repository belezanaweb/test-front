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
    &:last-child {
      font-weight: bold;
    }
  }
  .text {
    color: ${(props) => (props.discount ? '#FF7800' : '#212122')};
    margin-top: 5px;
    font-family: 'Helvetica Neue';
    &:nth-child(7) {
      font-weight: bold;
    }
  }
`
