import { withRouter, RouteComponentProps } from 'react-router-dom';

const Router: ClassDecorator = target => {
  return withRouter(target);
}