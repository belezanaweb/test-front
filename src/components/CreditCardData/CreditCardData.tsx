import React from 'react';
import styled from 'styled-components';

import CreditCard from '../../types/CreditCard';

import Box, { Flex } from '../Box';
import Text from '../Text';

const Data = styled(Text)`
  color: ${({ theme }) => theme.colors.grayExtraDark};
`;

const StyledCreditCardData = styled.div``;

const CreditCardData: React.FC<Partial<CreditCard>> = ({ expiringDate, name, number }) => {
  return (
    <StyledCreditCardData>
      <Flex css={{ flexDirection: 'column' }}>
        <Box><Data aria-label="card number">{`****.****.****.${number}`}</Data></Box>
        <Box><Data aria-label="name">{name?.toUpperCase()}</Data></Box>
        <Box><Data aria-label="expiring date">{expiringDate}</Data></Box>
      </Flex>
    </StyledCreditCardData>
  );
};

export default CreditCardData;
