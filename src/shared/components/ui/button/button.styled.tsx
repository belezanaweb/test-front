import styled, { css } from 'styled-components/macro';
import { IButtonStyles } from './button.interface';

const base: any = {
  style: css`
    border-radius: 4px;
    border: none;
    cursor: pointer;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  `,
  primary: (theme: any) => css`
    background: ${theme.button.primary.backgroundColor};
    box-shadow: inset 0 -3px 0 0 ${theme.button.primary.shadowColor_1},
      0 2px 4px 0 ${theme.button.primary.shadowColor_2};
    color: ${theme.button.primary.color};
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 0.5px;
    transition: all 0.5s ease-in-out;

    &:hover {
      box-shadow: inset 0 -50px 0 0 ${theme.button.primary.shadowColor_1},
        0 2px 4px 0 ${theme.button.primary.shadowColor_2};
    }
  `,
  small: css`
    padding: 0.4rem 0.6rem;
  `,
  medium: css`
    padding: 1rem 0.8rem;
  `,
  large: css`
    padding: 1.8rem 1rem;
  `,
  disabled: (theme: any) => css`
    background: ${theme.button.disabled.backgroundColor};
    box-shadow: inset 0 -3px 0 0 ${theme.button.disabled.shadowColor_1},
      0 2px 4px 0 ${theme.button.disabled.shadowColor_2};
    color: ${theme.button.disabled.color};

    &:hover {
      box-shadow: inset 0 -3px 0 0 ${theme.button.disabled.shadowColor_1},
        0 2px 4px 0 ${theme.button.disabled.shadowColor_2};
    }
  `,
};

export const Button = styled.button<IButtonStyles>`
  ${base.style};
  ${(props) => base[props.size]};
  ${(props) => props.styleType === 'primary' && base.primary(props.theme)};
  ${(props) => props.block && 'width: 100%'};
  ${(props) => props.disabled && base.disabled(props.theme)};
`;
