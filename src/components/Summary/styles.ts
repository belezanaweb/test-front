import styled from 'styled-components'

export const SummaryContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.white};
  padding: 28px 12px;
  margin-top: 20px;
`

export const SummaryRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
`
