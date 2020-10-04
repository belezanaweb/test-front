import React from 'react';

import { Container } from './styles';

import DoneIcon from '@material-ui/icons/Done';

function SuccessMessage() {
  return (
    <Container>
      <span><DoneIcon></DoneIcon></span>
      <h4>compra efetuada com sucesso</h4>
    </Container>
  );
}
export default SuccessMessage;