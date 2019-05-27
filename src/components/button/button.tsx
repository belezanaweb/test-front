import styled, { css } from 'styled-components';

const Button = styled.button<any>`
  display: inline-block;
  padding: 16px;
  width: 100%;
  text-transform: uppercase;

  ${props => props.disabled && css`
    cursor: not-allowed;
    pointer-events: all !important;
  `}
`;

export default Button;
