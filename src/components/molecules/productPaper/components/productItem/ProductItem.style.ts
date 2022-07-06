import styled from 'styled-components'

export const ProductItemBox = styled.div(
  ({ theme }) => `
  border: 1px solid ${theme.colors.gray};
  padding: 12px 10px 14px 10px;
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

export const ProductImage = styled.img`
  width: 65px;
  min-width: 65px;
  height: 65px;
`

export const ProductName = styled.p(
  ({ theme }) => `
  font-size: ${theme.fonts.text};
  margin: 0 0 15px;
`
)

export const ProductPrice = styled.p(
  ({ theme }) => `
font-weight: bold;
font-size: ${theme.fonts.highlightText};
align-self: flex-end;
margin: 0;
`
)
