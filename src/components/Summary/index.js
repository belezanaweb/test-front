import React from 'react';

/**
 * Styles
 */
import { InRight } from '../../assets/global';
import { SummaryDetails, SummaryItem, Off, Total } from './styles'

const Summary = () => (
  <SummaryDetails>
    <SummaryItem>
      PRODUTOS
      <InRight> R$ 100,00</InRight>
    </SummaryItem>
    <SummaryItem>
      FRETE
      <InRight>R$ 100,00</InRight>
    </SummaryItem>
    <Off>
      Desconto 
      <InRight>- R$ 30,00</InRight>
    </Off>
    <Total>
      TOTAL
      <InRight>R$ 600,00</InRight>
    </Total>
  </SummaryDetails>
);

export default Summary;
