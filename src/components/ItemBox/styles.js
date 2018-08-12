import styled from 'styled-components'

export const Container = styled.div`
  background: #fff;
  height: ${props => `${props.boxHeight}px`};
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  padding: 13px;
  overflow-y: scroll;
  margin-bottom: 20px;
`
