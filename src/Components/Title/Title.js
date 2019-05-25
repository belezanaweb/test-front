import React from 'react';
import { TITLE_TYPES } from '../../Constants';
import PropTypes from 'prop-types';
import classes from './Title.module.scss';

let Title = (props) => {
  if(props.type === TITLE_TYPES.MAIN) {
    return <h1>{props.children}</h1>
  }else if(props.type === TITLE_TYPES.SUB) {
    return <h2>props.children</h2>
  }
}

Title.propTypes = {
  type: PropTypes.string.isRequired
}

export default Title;