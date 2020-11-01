import styled from 'styled-components'
import { Value } from '../Value/Value'

export const ProductCardWrapper = styled.article`
  display: grid;
  grid-gap: 11px 15px;
  grid-template-columns: 65px 1fr;
  grid-template-rows: 1fr 1fr;
  padding: 12px 10px 14px;
  border: 1px solid #eee;
  border-radius: 3px;
`

export const ProductCardImage = styled.img`
  width: 65px;
  height: 65px;
  object-fit: contain;
  object-position: 50% 100%;
  grid-row: span 2;
`

export const ProductCardTitle = styled.h2`
  margin: 0;
  color: #212122;
  font-size: 13px;
  font-weight: normal;
  line-height: 1.23076923076923;
`

export const ProductCardPrice = styled(Value)`
  display: block;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.21428571428571;
  text-align: right;
`
