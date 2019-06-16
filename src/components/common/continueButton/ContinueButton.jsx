import React from 'react';
import { Link } from 'react-router-dom';
import { css } from 'aphrodite/no-important';
import PropTypes from 'prop-types';

import styles from './styles';

const ContinueButton = (props) => {

  const {
    link,
    label,
    enable,
  } = props;

  return (

    <div className={css(styles.container, enable ? '' : styles.disable)}>
      {
        enable ? (
          <Link
            to={link}
            className={css(styles.link)}
          >
            {label}
          </Link>
        ) : (
          label
        )
      }
    </div>

  );

};

ContinueButton.propTypes = {
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  enable: PropTypes.bool,
};

ContinueButton.defaultProps = {
  enable: true,
};

export default ContinueButton;
