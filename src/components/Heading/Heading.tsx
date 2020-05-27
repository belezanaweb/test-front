import styled from 'styled-components';

import Text from '../Text';

const Heading = styled(Text)`
  color: ${({ theme }) => theme.colors.grayDark};
  display: inline-flex;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  margin: 0;
  padding: 10px 10px 6px;
  text-transform: uppercase;
`;


export default Heading;