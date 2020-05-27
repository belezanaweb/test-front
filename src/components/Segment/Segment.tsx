import styled from 'styled-components';

const Segment = styled.div`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 3px;
  padding: 15px 13px;
`;

export default Segment;
