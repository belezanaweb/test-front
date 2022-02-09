import styled from 'styled-components';
import { darken } from 'polished';

interface ButtonProps {
  width?: string;
  type?: string;
}

export const ButtonStyle = styled.button<ButtonProps>`
  width: ${(props) => props.width};

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.colors.primary};
  border-color: ${(props) => props.theme.colors.primary};

  padding: 1.8rem 0.94rem;
  border-radius: 0.3rem;

  font-size: 2rem;
  font-weight: bold;
  line-height: 2.4rem;
  letter-spacing: 0.05rem;
  text-transform: uppercase;

  color: ${(props) => props.theme.colors.white};
  box-shadow: 0 0.3rem 0 0 ${(props) => props.theme.colors.primaryDark};
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.colors.primaryDark};
  }
  /*
  :disabled {
    background-color: ${(props) => props.theme.colors.primary};
    border-color: ${(props) => props.theme.colors.primary};
    color: white;
  }

  :active:enabled {
    -moz-box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
    background-color: ${(props) => darken(0.1, 'blue')};
  } */
`;
