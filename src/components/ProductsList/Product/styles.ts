import styled, { css } from 'styled-components'

export const ProductWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
`

export const ImageWrapper = styled.div`
  width: 100%;
  max-width: 60px;
  height: 100%;
  max-height: 60px;
`

export const ProductImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  max-height: unset;
`

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const TextWrapper = styled.div`
  width: 100%;
`
