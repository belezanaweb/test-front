import styled, { CSSObject } from 'styled-components';

interface FlexProps {
  children: React.ReactNode,
  css?: CSSObject,
  direction?: string,
  inline?: boolean,
}

export const Flex = styled.div<FlexProps>`
  display: ${(props) => (props.inline ? 'inline-flex' : 'flex')};
  flex: 1;
  flex-direction: ${(props) => props.direction};
  width: 100%;

  ${({ css }) => css};
`;

Flex.defaultProps = {
  css: {},
  direction: 'row',
  inline: false,
};

interface GridProps {
  children: React.ReactNode;
  css?: CSSObject;
  gap?: string;
  template?: string;
}

export const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${({ template }) => template};
  grid-gap: ${({ gap }) => gap};
  width: 100%;

  ${({ css }) => css};
`;

Grid.defaultProps = {
  css: {},
  gap: '20px',
  template: '1fr 1fr',
};

interface BoxProps {
  children: React.ReactNode,
  css?: CSSObject,
}

const Box = styled.div<BoxProps>`
  /* box-shadow: 0 0 0 1px pink inset; */
  display: flex;
  flex: 1;
  flex-direction: row;

  ${({ css }) => css};
`;

Box.defaultProps = {
  css: {},
};

export default Box;
