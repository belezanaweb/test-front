import styled from 'styled-components'

export const CheckoutResume = styled.ul`
  padding: var(--spacing-3) var(--spacing-2);
  height: fit-content;
  list-style: none;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--colors-gray-200);
  border-radius: var(--border-radius-md);
`

export const Description = styled.p`
  color: var(--colors-gray-700);
  font-size: var(--font-size-md);
`

export const Price = styled.span`
  color: var(--colors-gray-700);
  font-size: var(--font-size-md);
`

export const ProductResume = styled.li`
  display: flex;
  justify-content: space-between;

  & + li {
    padding-top: var(--spacing-2);
  }
`

export const FreightResume = styled(ProductResume)``

export const DiscountResume = styled(ProductResume)`
  ${Description}, ${Price} {
    color: var(--colors-orange-200);
  }
`

export const TotalResume = styled(ProductResume)`
  margin-top: var(--spacing-1);

  ${Description}, ${Price} {
    font-weight: bold;
  }
`
