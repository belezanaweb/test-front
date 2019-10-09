import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Inject, Connection } from 'exredux';
import { modelStore } from '../service/modelStore';
import { RouterModel } from '../service/models/RouterModel';

class ModelProps {
  @Inject router?: RouterModel;
}

type Props = RouteComponentProps & ModelProps;

@Connection({
  modelStore,
  props: ModelProps
})
class RouterHandler extends React.Component<Props> {
  render() {
    return <React.Fragment />;
  }

  componentDidMount() {
    const { history, router } = this.props;
    router.routeChange(history.location.pathname);

    history.listen(location => {
      router.routeChange(history.location.pathname);
    });
  }
}

export default withRouter(RouterHandler);
