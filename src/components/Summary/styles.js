import styled from 'styled-components';

export const SummaryDetails = styled.div`
  border: 1px solid #CCC;
  padding: 14px 12px;
  color: #212122;
`;

export const SummaryItem = styled.div`
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
  display: block;
  margin-bottom: 8px;
`;

export const Off = SummaryItem.extend`
  color: #FF7800;
`;

export const Total = SummaryItem.extend`
  font-weight: bold;
  margin-top: 8px;
  margin-bottom: 0;
`;
