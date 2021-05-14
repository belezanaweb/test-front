import styled from 'styled-components'
import px2vw from '../../utils/px2vw'

export const Container = styled.div`
  width: 100%;
  flex-direction: column;
  padding: ${px2vw(20)} ${px2vw(20)} ${px2vw(40)} ${px2vw(20)};
`

export const CartContainer = styled.div`
  width: 100%;
  flex-direction: column;
  background-color: #fff;
  padding: ${px2vw(20)} ${px2vw(20)} 0 ${px2vw(20)};
  margin-bottom: ${px2vw(40)};
`
