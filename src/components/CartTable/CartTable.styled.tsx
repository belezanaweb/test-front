import styled from 'styled-components/macro'

export const CartTable = styled.section`
  border: 1px solid ${({ theme }) => theme.colors.base};
  border-radius: 0.3rem;
  padding: 1.5rem;
`

export const CartLine = styled.p`
  color: ${({ theme }) => theme.colors.baseDarken};
  display: flex;
  font-size: 1.4rem;
  justify-content: space-between;
  line-height: 1.7rem;
  margin-bottom: 0.8rem;
  text-transform: uppercase;
`

export const CartLineActive = styled(CartLine)`
  color: ${({ theme }) => theme.colors.activeLighten};
`

export const CartLineHighLight = styled(CartLine)`
  font-weight: bold;
  margin-bottom: 0;
  margin-top: 1.8rem;
`

export const CartItem = styled.span``
