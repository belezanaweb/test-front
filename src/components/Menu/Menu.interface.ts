export interface IMenuItem {
  label: string;
  path: string;
}

export interface IMenu {
  items: IMenuItem[];
  step: number;
}
