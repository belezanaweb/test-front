import styled from 'styled-components'

export const Title = styled.h2`
  font-size: 14px;
  margin: 0px 15px;
  text-transform: uppercase;
  color: #999;
  font-weight: bold;
`

export const Container = styled.div`
  background-color: #fff;
  border-radius: 3px;
  margin: 5px;
  padding: 5px 0px;

  .product-item {
    display: flex;
    padding: 10px;
    margin: 15px 10px;
    border: 1px solid #eee;
    color: #212122;
    font-size: 13px;

    img {
      width: 65px;
      height: 65px;
    }

    div {
      display: flex;
      flex-direction: column;

      span {
        align-self: flex-end;
        margin-top: 15px;
        font-size: 14px;
        font-weight: bold;
      }
    }
  }
`
