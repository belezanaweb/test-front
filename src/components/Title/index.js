import styled from 'styled-components'
import px2vw from '../../utils/px2vw'

const Title = styled.p`
  text-transform: uppercase;
  color: #999;
  font-weight: bold;

  margin-left: ${px2vw(20)};
  margin-bottom: ${px2vw(10)};
`

export default Title
