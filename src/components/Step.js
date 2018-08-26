import React from 'react';
import styled from 'styled-components';

const StepItem = styled.span`
  color: ${({ isActive }) => (isActive ? '#FF7800' : '#CCC' )};
  text-transform: uppercase;
`

const Step = ({
  title,
  isActive
}) => (
  <StepItem isActive={isActive}>{title}</StepItem>
);

export default Step;
