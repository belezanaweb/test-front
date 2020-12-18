import styled, { css } from 'styled-components/macro';

import { IGridColStyles } from './grid.interface';

const columnWidth = 100 / 12;

const base: any = {
  medium: (md: number) => css`
    @media (min-width: 768px) {
      width: ${columnWidth * md}%;
    }
  `,
  large: (lg: number) => css`
    @media (min-width: 992px) {
      width: ${columnWidth * lg}%;
    }
  `,
};

export const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap row;
  width: 100%;
`;

export const GridCol = styled.div<IGridColStyles>`
  width: ${(props) => columnWidth * props.xs}%;

  ${(props) => props.md && base.medium(props.md)};
  ${(props) => props.lg && base.large(props.lg)};

  ${(props) => props.xsOffset && `margin-left: ${columnWidth * props.xsOffset}%`};
  ${(props) => props.mdOffset && `margin-left: ${columnWidth * props.mdOffset}%`};
  ${(props) => props.lgOffset && `margin-left: ${columnWidth * props.lgOffset}%`};
`;
