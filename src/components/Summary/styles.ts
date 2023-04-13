import styled from 'styled-components'
import { device } from '../../styles/media'

export const SummaryContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.white};
  padding: 28px 12px;
  position: absolute;
  bottom: 0;
  width: 100%;
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1);

  @media (${device.tablet}) {
    right: 0;
    top: 37px;
    width: 320px;
    height: 100%;
  }
`

export const SummaryRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
`
