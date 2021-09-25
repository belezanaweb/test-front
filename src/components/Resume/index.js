import React from 'react'
import { useSelector } from 'react-redux'

/**
 * Reducers
 */
import { selectCartResumeResponse } from '../../store/reducers/checkout'

/**
 * Helpers
 */
import { formatCoinStr } from '../../helpers'

/**
 * Components
 */
// import { Container } from '../../components/Utils/styles'

/**
 * Styles
 */
import { ContainerResume, Wrapper, RowInfo, InfoDesc, InfoValue } from './styles'

const Bag = () => {
  const cartResumeResponse = useSelector(selectCartResumeResponse)

  return (
    <ContainerResume>
      <Wrapper>
        <RowInfo>
          <InfoDesc>Products</InfoDesc>
          <InfoValue>{formatCoinStr(cartResumeResponse?.subTotal)}</InfoValue>
        </RowInfo>
        <RowInfo>
          <InfoDesc>Shipping</InfoDesc>
          <InfoValue>{formatCoinStr(cartResumeResponse?.shippingTotal)}</InfoValue>
        </RowInfo>
        <RowInfo negative>
          <InfoDesc>Discount</InfoDesc>
          <InfoValue>{formatCoinStr(cartResumeResponse?.discount, '-')}</InfoValue>
        </RowInfo>
        <RowInfo total>
          <InfoDesc>Total</InfoDesc>
          <InfoValue>{formatCoinStr(cartResumeResponse?.total)}</InfoValue>
        </RowInfo>
      </Wrapper>
    </ContainerResume>
  )
}

export default Bag
