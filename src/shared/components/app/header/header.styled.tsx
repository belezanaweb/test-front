import styled from 'styled-components/macro';

export const Header = styled.header`
  background: ${(props) => props.theme.header.backgroundColor};
  box-shadow: 1px 1px 5px 0 ${(props) => props.theme.header.shadowColor};
  padding: 1rem;
`;
