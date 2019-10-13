import styled from 'styled-components'

const Col = styled.div`
  display: inline-block;
  width: ${props => `calc(100%/(16/${props.col}))`};
  margin-left: ${props => `calc(100%/(16/${props.offset}))`};
  margin-bottom: 1.923rem;
`

export default Col
