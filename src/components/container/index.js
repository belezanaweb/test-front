import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: ${props => props.theme.widths.container};
  margin: 0 auto;
  padding: 0 0.7rem;

  @media (min-width: 365px) {
    padding: 0 1.2rem;
  }
`;

export default StyledContainer;
