import styled from 'styled-components'

interface BagDetailsItem {
  highlight: boolean
  bold: boolean
}

export const Container = styled.section`
  grid-area: bag-details;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const BagDetailsList = styled.ul`
  margin: 0;
  list-style: none;
  padding: 0;
`

export const BagDetailsItem = styled.li<BagDetailsItem>(({ highlight, bold, theme }) => {
  const checkHighlightMarginBottom = highlight ? '16px' : '9px'
  return `
    display: flex;
    width: 100%;
    justify-content: space-between;
    color: ${highlight ? theme.colors.accent : theme.colors.primary};
    font-weight: ${bold ? '700' : 'normal'};
    font-size: ${theme.fonts.highlightText};
    margin-bottom: ${bold ? '1px' : checkHighlightMarginBottom};
    line-height: 17px;
  `
})

export const BagDetailsLabel = styled.p`
  text-transform: uppercase;
  margin: 0;
`

export const BagDetailsValue = styled.p`
  margin: 0;
`
