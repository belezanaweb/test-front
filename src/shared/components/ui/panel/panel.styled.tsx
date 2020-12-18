import styled from 'styled-components/macro';

export const Body = styled.div`
  background: ${(props) => props.theme.panel.body.backgroundColor};
  border-radius: 0.3rem;
  box-shadow: 1px 1px 5px 0 ${(props) => props.theme.panel.body.shadowColor};
  padding: 1rem;
`;
