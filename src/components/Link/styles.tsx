import { Link as BaseLink } from 'react-router-dom';
import styled from 'styled-components';

interface ContainerProps {
  mode: 'active' | 'default';
}

export const Container = styled(BaseLink)<ContainerProps>`
  cursor: pointer;
  font-family: 'Helvetica Neue';
  font-size: 13px;
  font-weight: 700;
  letter-spacing: NaNpx;
  line-height: 16px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;

  color: ${props => (props.mode === 'active' ? '#FF7800' : '#CCC')};
`;
