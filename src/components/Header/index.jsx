import React from 'react';

import Text from 'components/Text';

import { Container } from 'react-grid-system';
import HeaderStyled from './style';

const Header = () => {
  return (
    <HeaderStyled key="header" className="animated fadeIn faster">
      <Container data-cy="header">
        <ul>
          <li data-cy="textCart">
            <Text
              bold
              center
              size="13px"
              uppercase
              color={window.location.pathname === '/cart' ? '#FF7800' : '#CCC'}
            >
              Sacola
            </Text>
          </li>
          <li data-cy="textPayment">
            <Text
              bold
              center
              size="13px"
              uppercase
              color={
                window.location.pathname === '/payment' ? '#FF7800' : '#CCC'
              }
            >
              Pagamento
            </Text>
          </li>
          <li data-cy="textSuccess">
            <Text
              bold
              center
              size="13px"
              uppercase
              color={
                window.location.pathname === '/success' ? '#FF7800' : '#CCC'
              }
            >
              Confirmaçao
            </Text>
          </li>
        </ul>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
