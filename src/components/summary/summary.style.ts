import styled from 'styled-components'

export const SummaryStyled = styled.div`
  margin: 20px auto;
  padding: 15px 14px;
  border: 1px solid #CCC;
  border-radius: 3px;

  
  .item {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 17px;
    color: #212122;
    letter-spacing: 0;
    p:nth-child(2) { text-align: right; }

    & + .item { margin-top: 9px; }
    &.bold { font-weight: 700; }
    &.accent { color: #FF7800 }
    &.margin { margin-top: 16px; }
  }
`
