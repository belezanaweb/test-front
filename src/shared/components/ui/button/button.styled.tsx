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
    color: ${theme.button.primary.color};
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 0.5px;

    &:hover {
      background: ${theme.button.primary.backgroundColor_hover};
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
};

export const Button = styled.button<IButtonStyles>`
  ${base.style}
  ${(props) => base[props.size]}
  ${(props) => props.styleType === 'primary' && base.primary(props.theme)}
  ${(props) => props.block && 'width: 100%'}
`;
