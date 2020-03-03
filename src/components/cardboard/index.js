import styled from 'styled-components';

const styledCardboard = styled.div`
  background-color: ${props => props.theme.colors.white};
  padding: 0.75rem;

  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  border-radius: 3px;
`;

export default styledCardboard;
