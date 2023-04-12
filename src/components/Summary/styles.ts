import styled from 'styled-components'
import { device } from '../../styles/media'

export const SummaryContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.white};
  padding: 28px 12px;
  margin-top: 20px;

  @media (${device.laptop}) {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
`

export const SummaryRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
`
