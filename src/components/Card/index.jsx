import React from 'react';
import CardStyled from './style';

const Card = props => (
  <CardStyled
    className="animated fadeIn"
    transparent={props.transparent && props.transparent}
  >
    {props.children && props.children}
  </CardStyled>
);

export default Card;
