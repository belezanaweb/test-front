import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { Container } from './styles';

function Spinner() {
  return (
    <Container data-testid="spinner">
      <CircularProgress color="secondary" />
    </Container>
  );
}

export default Spinner;
