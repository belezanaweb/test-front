import { Model, Action } from 'exredux';

@Model
export class RouterModel {
  pathname = '';

  @Action
  routeChange(pathname: string) {
    this.pathname = pathname;
  }
}
