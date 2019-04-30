import React from 'react';
import { PropTypes } from 'prop-types';

import {
  Text,
  Info,
  InfoBottom,
  Container,
} from './styles';

const CardResume = (props) => (
  <Container>
    <Info>
      <Text>PRODUTOS</Text>
      <Text>R$ {props.resume.subTotal}</Text>
    </Info>
    <Info>
      <Text>FRETE</Text>
      <Text>R$ {props.resume.shippingTotal}</Text>
    </Info>
    <Info>
      <Text color="orange">DESCONTO</Text>
      <Text color="orange">- R$ {props.resume.discount}</Text>
    </Info>
    <InfoBottom>
      <Text bold={700}>TOTAL</Text>
      <Text bold={700}>R$ {props.resume.total}</Text>
    </InfoBottom>
  </Container>
);

CardResume.propTypes = {
  resume: PropTypes.shape({
    discount: PropTypes.number.isRequired,
    shippingTotal: PropTypes.number.isRequired,
    subTotal: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
  })
};

export default CardResume;
