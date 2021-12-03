import styled from 'styled-components/'

export const StyledDiv = styled.div`
  display: flex;
  align-items: ${(props) => props.alignItems};
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  flex-wrap: ${(props) => props.flexWrap};
`
