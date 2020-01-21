import React, { Component } from 'react';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import Text from 'components/Text';
import Button from 'components/Button';

import * as AlertActions from 'store/alerta/actions';
import AlertaStyled from './style';

class Alerta extends Component {
  render() {
    const menu_variants = {
      open: { opacity: 1, y: 0, transition: 'all .2s ease' },
      hidden: { opacity: 0, y: -2000, transition: 'all .2s ease' },
    };
    const { alerta, toggle } = this.props;
    return (
      <AlertaStyled key="alerta">
        <motion.div
          onClick={() =>
            toggle({
              show: false,
              route: alerta.route,
            })
          }
          initial="hidden"
          animate={alerta.alert ? 'open' : 'hidden'}
          variants={menu_variants}
        >
          <div>
            <Text center size="30px">
              {alerta.title ? alerta.title : ''}
            </Text>
            <Text size="14px" center>
              {alerta.description ? alerta.description : ''}
            </Text>
            <Link to={alerta.route}>
              <Button type="text" center>
                ok
              </Button>
            </Link>
          </div>
        </motion.div>
      </AlertaStyled>
    );
  }
}

Alerta.propTypes = {
  alerta: PropTypes.object,
};

const mapStateToProps = state => ({ alerta: state.alerta });
const mapDispatchToProps = dispatch => ({
  toggle: data => {
    dispatch(AlertActions.setAlert(data));
    dispatch(push(data.route));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Alerta);
