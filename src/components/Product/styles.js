import styled from 'styled-components'

export const ProductContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding: 12px 10px;
  border-radius: 3px;
  border: 1px solid #eee;
`
export const DetailsContainer = styled.div`
  flex: 3;
  display: flex;
  flex-wrap: wrap;
`
export const ImageContainer = styled.span`
  img {
    flex: 1;
    width: 65px;
  }
`
export const NameContainer = styled.div`
  width: 100%;
  font-size: 13px;
  line-height: 16px;
  font-weight: normal;
  color: #212122;
`
export const PriceContainer = styled.span`
  font-weight: bold;
  text-align: end;
  width: 100%;
`
