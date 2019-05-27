import styled, { css } from 'styled-components';

const Button = styled.button<any>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 60px;
  margin-bottom: 20px;
  background-color: ${props => props.theme && css`
    ${props.theme.palette.primary.main};
  `};
  border-radius: 3px;

  color: ${props => props.theme && css`
    ${props.theme.palette.primary.contrastText};
  `};

  letter-spacing: 0.5px;
  line-height: 24px;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;

  cursor: pointer;

  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  box-shadow: 0 -3px 0 0 ${props => props.theme && props.theme.palette.primary.dark} inset;

  &:hover {
    background-color: ${props => props.theme && css`
      ${props.theme.palette.primary.dark};
    `};
  }

  ${props => props.disabled && css`
    background-color: ${props.theme.palette.neutral.medium} !important;
    box-shadow: 0 -3px 0 0 rgba(0, 0, 0, 0.1) inset;
    cursor: not-allowed;
    pointer-events: all !important;
  `}
`;

export default Button;
