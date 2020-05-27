import styled, { css } from 'styled-components';

interface ButtonProps {
  fluid?: boolean;
}

const Button = styled.button<ButtonProps>`
  border-radius: 3px;
  border: none;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  box-shadow:
    0 -3px 0 0 ${({ theme }) => theme.colors.primaryDark} inset, 0 2px 4px 0 rgba(0,0,0,0.25);
  color: white;
  font-family: ${props => props.theme.fontFamily};
  font-size: 20px;
  font-weight: 700;
  height: 60px;
  letter-spacing: 0.5px;
  line-height: 24px;
  outline: none;
  padding: 0 18px;
  text-align: center;
  text-transform: uppercase;

  &:focus, &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    box-shadow: none;
  }

  ${({ fluid }) => (fluid && css`
    width: 100%;
  `)}
`;

Button.defaultProps = {
  fluid: false,
};

export default Button;
