import * as React from 'react';
import styled, { css } from 'styled-components';

const StyledItem = styled.div<{ active: Boolean, theme: any }>`
  flex: 1;
  padding: 12px 0;
  color: #CCC;
  font-size: 13px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;

  ${props => props.active && css`
    color: ${props.theme.palette.primary.main};
    font-weight: bold;
  `}
`;

const StepItem: React.FC<{
  label: string,
  active: Boolean
}> = ({ label, active }) =>
  <StyledItem active={active}>{label}</StyledItem>

export default StepItem;
