import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  flex-direction:column;
  padding: 10px;
  border: 1px solid red;
  margin-top: 2rem;
`

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
`

const Summary = ({
  data
}) => (
  <Box>
    <SummaryItem>
      <span>produtos</span>
      <span>R$ 624,80</span>
    </SummaryItem>
    <SummaryItem>
      <span>frete</span>
      <span>R$ 5,80</span>
    </SummaryItem>
    <SummaryItem>
      <span>desconto</span>
      <span>-R$ 30,80</span>
    </SummaryItem>
    <SummaryItem>
      <span>total</span>
      <span>R$ 600,80</span>
    </SummaryItem>
  </Box>
)

export default Summary;
