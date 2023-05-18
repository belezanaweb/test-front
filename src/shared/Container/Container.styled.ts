import styled from 'styled-components'

export const ContainerStyled = styled.div`
  width: 100%;
  max-width: ${props => props.theme.breakpoints.desktop};
  margin-left: auto;
  margin-right: auto;
  padding-left: 8px;
  padding-right: 8px;
`;