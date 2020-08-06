import styled from "@emotion/styled"

export const ProductItemWrapper = styled.li`
  display: flex;
  align-items: center;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.greyLigth};
  padding: 0.625rem;
  margin-bottom: 1rem;

  &:last-of-type {
    margin-bottom: initial;
  }
`

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 11px;
  font-size: 0.875rem;
  justify-content: space-between;
  width: 100%;

  @media (min-width: ${ ({ theme }) => theme.breakpoints.small}px) {
    flex-direction: row;
  }
`
export const ProductImage = styled.img`
`

export const ProductDescription = styled.span`
  color: ${ ({ theme }) => theme.colors.dark};  
`

export const ProductPrice = styled.span`
  color: ${ ({ theme }) => theme.colors.darkest};
  font-weight: 700;
  font-size: 0.9375rem;
  text-align: right;
`