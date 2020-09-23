import React from 'react';

import { CardContainer } from './styles';

const Cardboard = ({ children, out, ...rest }) => {
  return (
    <CardContainer {...rest} out={out}>
      {children}
    </CardContainer>
  );
};

export default Cardboard;
