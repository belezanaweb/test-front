import * as React from 'react';
import styled, { css } from 'styled-components';

const StyledItem = styled.div<{ active: Boolean }>`
  ${props => props.active && css`
    color: red;
    font-weight: bold;
  `}
`;

const StepItem: React.FC<{
  label: string,
  active: Boolean
}> = ({ label, active }) =>
  <StyledItem active={active}>{label}</StyledItem>

export default StepItem;
