import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css``}
`

type InputGroupProps = {
  isSideToSide: boolean
}

export const AcessibilityWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 1rem;
  ${media.lessThan('medium')`
    justify-content: center;
    margin-bottom: 1rem;
  `}
`

export const InputGroup = styled.div<InputGroupProps>`
  ${({ isSideToSide }) => css`
  display: ${isSideToSide ? 'flex;' : 'block;'}
  grid-gap: 1rem;
  ${media.greaterThan('medium')`
    display: flex;
    flex-direction: column;
    grid-gap: 1.3rem;
  `}
  `}
`

export const CartWrapper = styled.form`
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

export const CardWrapper = styled.section``

export const FormDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 1.3rem;
  ${media.greaterThan('medium')`
    flex-direction: row;
  `}
`

export const FormWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    grid-gap: ${theme.spacings.xlarge};
  `}
`

export const BoxPaymentWrapper = styled.div`
  ${({ theme }) => css`
    /* max-width: 25rem; */
  `}
`
