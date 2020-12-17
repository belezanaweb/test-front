import styled, { css } from 'styled-components/macro';
import { IButtonStyles } from './button.interface';

const base: any = {
  style: css`
    border-radius: 4px;
    border: none;
  `,
  small: css`
    padding: 2px 4px;
  `,
  medium: css`
    padding: 4px 8px;
  `,
  large: css`
    padding: 6px 12px;
  `,
};

export const Button = styled.button<IButtonStyles>`
  ${base.style}
  ${(props) => base[props.size]}
`;
