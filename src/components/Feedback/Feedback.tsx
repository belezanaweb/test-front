import React from 'react';
import styled from 'styled-components';

import Text from '../Text';

const StyledFeedback = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 12px 0;
`;

const SuccessIcon = styled.div`
  background: url('/check.png') no-repeat;
  background-position: center;
  background-size: 50%;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  height: 40px;
  width: 40px;
`;

const SuccessText = styled(Text)`
  color: ${({ theme }) => theme.colors.primaryLight};
  font-weight: 700;
  line-height: 17px;
  margin-top: 12px;
  text-transform: uppercase;
  letter-spacing: -0.0025em;
`;

const Feedback: React.FC = ({ children }) => (
  <StyledFeedback>
    <SuccessIcon />
    <SuccessText>{children}</SuccessText>
  </StyledFeedback>
);

export default Feedback;
