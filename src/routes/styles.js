import styled from 'styled-components'
import px2vw from '../utils/px2vw'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  padding: ${px2vw(20)} ${px2vw(24)};
  width: 100%;
  max-width: 1440px;
`
