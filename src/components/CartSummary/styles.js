import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 9px;
  padding: 15px;
  box-sizing: border-box;
  border-radius: 3px;
  border: 1px solid #ccc;

  min-height: 100px;
`

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.cartSummary.text};
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
`

export const Price = styled.p`
  color: ${({ theme }) => theme.colors.cartSummary.text};
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
`

const Item = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Products = styled(Item)``

export const Shipping = styled(Item)``

export const Discount = styled(Item)`
  ${Title}, ${Price} {
    color: ${({ theme }) => theme.colors.cartSummary.textDiscount};
  }
`
export const Total = styled(Item)`
  margin: 16px 0 0 0;

  ${Title}, ${Price} {
    font-weight: 700;
  }
`
