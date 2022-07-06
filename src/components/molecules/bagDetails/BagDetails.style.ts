import styled from 'styled-components'

interface BagDetailsItem {
  highlight: boolean
  bold: boolean
}

export const BagDetailsList = styled.ul`
  margin: 0;
  list-style: none;
  padding: 0;
`

export const BagDetailsItem = styled.li<BagDetailsItem>(
  ({ highlight, bold, theme }) => `
display: flex;
width: 100%;
justify-content: space-between;
color: ${highlight ? theme.colors.accent : theme.colors.black};
font-weight: ${bold ? '700' : 'normal'};
font-size: ${theme.fonts.highlightText};
margin-bottom: 9px;
`
)

export const BagDetailsLabel = styled.p`
  text-transform: uppercase;
  margin: 0;
`

export const BagDetailsValue = styled.p`
  margin: 0;
`
