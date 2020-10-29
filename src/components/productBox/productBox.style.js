import styled from 'styled-components'

const ProductContainer = styled.div`
  border-radius: 3px;
  border: 1px solid #eee;
  box-sizing: border-box;
  padding: 11px 10px 11px 11px;
  display: flex;
  min-height: 90px;
`

const ProductImage = styled.img`
  width: 65px;
  height: 65px;
`

const ProductDetails = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`

const ProductDescription = styled.div`
  color: #212122;
  font-size: 13px;
  line-height: 16px;
  margin: 0px 0px 15px 10px;
`

const ProductPriceContainer = styled.div`
  color: #212122;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  margin: 0px;
  display: flex;
  justify-content: flex-end;
`

export { ProductContainer, ProductImage, ProductDescription, ProductPriceContainer, ProductDetails }
