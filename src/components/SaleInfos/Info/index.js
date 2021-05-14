import styled from 'styled-components'
import px2vw from '../../../utils/px2vw'

const Info = styled.div`
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: ${px2vw(20)};

  ${(props) => props.color && `color: ${props.color};`}
  ${(props) => props.bold && `font-weight: bold;`}
`

export default Info
