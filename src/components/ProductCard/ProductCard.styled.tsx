import styled from 'styled-components/macro'

export const ProductCard = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.baseLighten};
  border: 1px solid ${({ theme }) => theme.colors.base};
  border-radius: 0.3rem;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`

export const ProductImage = styled.img`
  margin-right: 1.5rem;
  @media (min-width: 768px) {
    width: 20rem;
  }
`

export const ProductDescWrapper = styled.div``

export const ProductTitle = styled.h2`
  color: ${({ theme }) => theme.colors.baseDarken};
  font-size: 1.3rem;
  font-weight: normal;
  line-height: 1.6rem;
  margin-bottom: 1.5rem;
`

export const ProductPrice = styled.span`
  color: ${({ theme }) => theme.colors.baseDarken};
  display: block;
  font-size: 1.4rem;
  font-weight: bold;
  line-height: 1.7rem;
  text-align: right;
`
