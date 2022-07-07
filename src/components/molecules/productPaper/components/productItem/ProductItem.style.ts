import styled from 'styled-components'

const variants: ImageObject = {
  thumbnail: '42px',
  small: '65px'
}

interface ProductVariant {
  sizeVariant: keyof ImageObject
}

export const ProductItemBox = styled.div<ProductVariant>(
  ({ theme, sizeVariant }) => `
    border: 1px solid ${theme.colors.gray};
    border-radius: ${theme.borderRadius};
    padding: ${sizeVariant === 'small' ? '10px 10px 14px 10px' : '11px'};
    display: flex;
    gap: 10px;
  `
)

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
`

export const ProductImage = styled.img<ProductVariant>(
  ({ sizeVariant }) => `
    width: ${variants[sizeVariant]};
    min-width: ${variants[sizeVariant]};
    height: ${variants[sizeVariant]};
  `
)

export const ProductName = styled.p(
  ({ theme }) => `
    font-size: ${theme.fonts.text};
    margin: 0 0 15px;
    line-height: 16px;
  `
)

export const ProductPrice = styled.p(
  ({ theme }) => `
    font-weight: 700;
    font-size: ${theme.fonts.highlightText};
    align-self: flex-end;
    margin: 0;
  `
)
