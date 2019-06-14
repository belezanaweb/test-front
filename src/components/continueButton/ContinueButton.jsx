import React from 'react';
import { Link } from 'react-router-dom';
import { css } from 'aphrodite/no-important';
import PropTypes from 'prop-types';

import styles from './styles';

const ContineButton = (props) => {

  const {
    link,
    label,
  } = props;

  return (

    <div className={css(styles.container)} >
      <Link
        to={link}
        className={css(styles.link)}
      >
        {label}
      </Link>
    </div>

  );

};

ContineButton.propTypes = {
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default ContineButton;
