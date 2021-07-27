import styled from 'styled-components'

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 10px;
  border-radius: 3px;
  border: 1px solid #eee;
`
export const DetailsContainer = styled.div`
  flex: 3;
  display: flex;
  flex-wrap: wrap;
`
export const ImageContainer = styled.div`
  width: 2.62rem;
  margin-right: 0.68rem;

  img {
    width: 65px;
  }
`

export const NameContainer = styled.span`
  width: 100%;
  font-size: 13px;
  line-height: 16px;
  color: #212122;
`
export const PriceContainer = styled.span`
  font-weight: bold;
  text-align: end;
  width: 100%;
`
export const ProductSection = styled.div`
  display: flex;
  width: 95%;
  box-shadow: 1px;
  align-items: flex-start;
  background-color: #ffffff;
  padding: 4px;
  flex: 1;
  justify-content: center;
  border: none;
`
