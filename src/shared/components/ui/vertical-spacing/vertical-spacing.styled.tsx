import styled, { css } from 'styled-components/macro';

import { IVerticalSpacingStyles } from './vertical-spacing.interface';

const base: any = {
  top: {
    small: css`
      margin-top: 1rem;
    `,
    medium: css`
      margin-top: 2rem;
    `,
    large: css`
      margin-top: 3rem;
    `,
  },
  bottom: {
    small: css`
      margin-bottom: 1rem;
    `,
    medium: css`
      margin-bottom: 2rem;
    `,
    large: css`
      margin-bottom: 3rem;
    `,
  },
};

export const VerticalSpacing = styled.div<IVerticalSpacingStyles>`
  ${(props) => !props.top && !props.bottom && (`${base.top[props.size]} ${base.bottom[props.size]}`)};
  ${(props) => props.top && base.top[props.top]};
  ${(props) => props.bottom && base.bottom[props.bottom]};
`;
