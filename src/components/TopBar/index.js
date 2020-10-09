/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Wrapper, Button, Logo, Imagem,
} from './style';
import routes from '../../enums/routes';
import logo from '../../assets/logo.png';

const TopBar = (props) => {
  const { currentPage } = props;

  const buttons = [
    {
      name: 'SACOLA',
      pageRouter: routes.root,
    },
    {
      name: 'PAGAMENTO',
      pageRouter: routes.payment,
    },
    {
      name: 'CONFIRMAÇÃO',
      pageRouter: routes.confirmation,
    },
  ];
  return (
    <Wrapper>
      <Logo>
        <Imagem src={logo} />
      </Logo>
      { buttons.map((button) => (
        <Button isActive={currentPage === button.pageRouter} key={button}>
          {button.name}
        </Button>
      ))}
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  currentPage: state.menu,
});

TopBar.propTypes = {
  currentPage: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(TopBar);
