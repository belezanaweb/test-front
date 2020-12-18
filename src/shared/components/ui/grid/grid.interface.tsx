export interface IGridProps {
  children: JSX.Element | string;
}

export interface IGridColProps {
  children: JSX.Element | string;
  xs?: number;
  md?: number;
  lg?: number;
  xsOffset?: number;
  mdOffset?: number;
  lgOffset?: number;
}

export interface IGridColStyles {
  xs: number;
  md?: number;
  lg?: number;
  xsOffset?: number;
  mdOffset?: number;
  lgOffset?: number;
}
