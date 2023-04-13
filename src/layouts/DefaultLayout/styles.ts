import styled from 'styled-components'
import { device } from '../../styles/media'

export const LayoutContainer = styled.div`
  margin: 0 auto;
`
export const ContentContainer = styled.main`
  height: calc(100vh - 260px);
  overflow-y: scroll;
  @media (${device.tablet}) {
    height: calc(100vh - 37px);
    width: calc(100% - 320px);
    overflow-y: hidden;
  }
`
