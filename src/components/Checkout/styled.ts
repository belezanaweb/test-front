import styled from 'styled-components'
import Text from 'components/Text'
import { RowWrapperProps } from './interfaces'

export const CustomText = styled(Text)`
  text-decoration: line-trought;
`

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`

export const CheckoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const CardWrapper = styled.div`
  flex-direction: column;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.padding.p0} ${({ theme }) => theme.padding.p4};
`

export const RowWrapper = styled.div<RowWrapperProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: ${({ align }) => align || 'unset'};
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  img {
    margin-right: ${({ theme }) => theme.margin.m10};
  }

  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.margin.m10};
  }
`

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Divider = styled.div`
  height: 40px;
  width: 100%;
`

export const CreditCardInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.margin.m3};
  margin-top: ${({ theme }) => theme.margin.m5};
  justify-content: center;
`
