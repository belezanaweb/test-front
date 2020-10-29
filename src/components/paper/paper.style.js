import styled from 'styled-components'

const PaperContainer = styled.div`
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  padding: ${(props) => props.padding || '10px'};
  margin: 0px 10px;
`

export default PaperContainer
