import React from 'react';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import LoadingStyled from './style';

const Loading = () => {
  const loading = useSelector(state => state.loading.isLoading);
  return (
    loading && (
      <LoadingStyled key="loading" className="animated faster fadeIn">
        <div className="lds-ellipsis" data-cy="loading">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </LoadingStyled>
    )
  );
};
Loading.propTypes = {
  loading: PropTypes.bool,
};

export default Loading;
