import styled from 'styled-components'

export const PurchaseSummaryWrapper = styled.section`
  display: grid;
  grid-gap: 9px;
  padding: 15px 13px 13px 14px;
  border: 1px solid #ccc;
  border-radius: 3px;
  color: #212122;
  font-size: 14px;
  line-height: 1.21428571428571;
`

export const PurchaseSummaryList = styled.dl`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0;
`

export const PurchaseSummaryTerm = styled.dt`
  text-transform: uppercase;
`

export const PurchaseSummaryDefinition = styled.dd`
  text-align: right;
  margin: 0;
`

export const PurchaseSummaryDiscountList = styled(PurchaseSummaryList)`
  color: #ff7800;
`

export const PurchaseSummaryTotalList = styled(PurchaseSummaryList)`
  margin-top: 7px;
  font-weight: 700;
`
