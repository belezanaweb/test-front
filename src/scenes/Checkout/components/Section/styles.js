import styled from 'styled-components'
import colors from '../../../../configs/colors'
import metrics from '../../../../configs/metrics'

export const Container = styled.section`
  margin: 10px 10px 0;
  &.content {
    margin: 15px 10px 16px;
  }
  @media (min-width: 768px) {
    &.forceFull > div {
      width: 100%;
    }
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: baseline;
    justify-content: flex-end;
  }
`

export const Caption = styled.div`
  width: 100%;
  font-size: ${metrics.fonts.size.normal};
  text-transform: uppercase;
  font-weight: bold;
  color: ${colors.gray};
  margin: 1px ${metrics.wrapper} 0;
`
