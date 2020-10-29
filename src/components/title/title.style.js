import styled from 'styled-components'

const TitleContainer = styled.h1`
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  color: #999;
  margin: 5px 0px 5px 10px;
  text-transform: uppercase;
  margin-top: ${(props) => (props.spacedTitle ? '20px' : '10px')};
`

export default TitleContainer
