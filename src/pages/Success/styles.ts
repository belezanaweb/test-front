import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  display: block;
  ${media.greaterThan('medium')`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      grid-gap: 1.25rem;
    `}
`

export const MenuWrapper = styled.section`
  ${media.greaterThan('medium')`
    margin-top: 2.125rem;
  `}
`

export const CartWrapper = styled.section`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    display: flex;
    flex-direction: column;
    grid-gap: ${theme.spacings.xlarge};
  `}
  ${media.greaterThan('medium')`
    flex-direction: row;
  `}
`

export const PaymentInfo = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    grid-gap: ${theme.spacings.xlarge};
    ${media.greaterThan('medium')`
    margin-top: 2.125rem;
  `}
  `}
`

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
`

export const Text = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
  `}
`

export const UserPaymentInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const StatusWrapper = styled.div``

export const StatusPaymentWrapper = styled.div`
  ${media.greaterThan('medium')`
    display: flex;
    flex-direction: column;
    margin-right: 1rem;
    margin-left: 1rem;
    max-width: 20rem;
  `}
`
export const ProductPaymentInfoWrapper = styled.div`
  ${media.greaterThan('medium')`
    display: flex;
    flex-direction: column;
    max-width: 20rem;
  `}
`