import * as React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';

function Success() {
  const { data, loading } = useSelector((state: AppState) => state.success);

  return loading ? (
    <p>loading...</p>
  ) : (
    data && (
      <div>
        <h1>
          {data.id} {data.username} ({data.name})
        </h1>
        <p>
          <b>email:</b> {data.email}
        </p>
      </div>
    )
  );
}

Success.preload = async ({ store, match }: { store: any, match: any }) => {
  const success = store.getState().success;
  const successId = match.params.id;
  //const needFetch = !success.data || success.data.id !== Number(successId);
  //if (needFetch && !success.loading) {
    //store.dispatch(actions.loadSuccessRequest(successId));
  //}
};

export default Success;
