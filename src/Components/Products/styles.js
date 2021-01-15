import styled from 'styled-components'

export const Whitebox = styled.div`
  background-color: #fff !important;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  padding: 10px;
  .loopProductsbox {
    box-sizing: border-box;
    border-radius: 3px;
    border: 1px solid #eee;
    padding: 5px;
    margin-bottom: 10px;
    .col-3 {
      padding-left: 20px !important;
      img {
        width: 100%;
      }
    }
    .col-9 {
      margin-top: 15px;
    }
  }
`
export const ProductTitle = styled.h3`
  color: #212122;
  font-family: 'Helvetica Neue';
  font-size: 12px;
  line-height: 16px;
`

export const ProductPrice = styled.h4`
  color: #212122;
  font-family: 'Helvetica Neue';
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  padding-right: 10px;
  font-weight: bold;
`
