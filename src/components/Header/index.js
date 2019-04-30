import React from 'react';

import {
  Container,
  TitleStep,
} from './styles';

const Header = (props) => (
  <Container>
    <TitleStep active={props.page === 'bag'}>
      Sacola
    </TitleStep>
    <TitleStep active={props.page === 'payment'}>
      Pagamento
    </TitleStep>
    <TitleStep active={props.page === 'success'}>
      Confirmação
    </TitleStep>
  </Container>
);

export default Header;
