import * as React from 'react';

import { ILoadingProps } from './loading.interface';
import * as Styled from './loading.styled';

const commonStyle = {
  margin: 'auto',
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
};

export const Loading: React.FC<ILoadingProps> = ({
  style = commonStyle,
  color = '#ff6c00',
  speed = 2.4,
  size = 'medium',
}) => (
  <Styled.Loading style={style} speed={speed} color={color} size={size}>
    <Styled.CircleOne />
    <Styled.CircleTwo />
    <Styled.CircleThree />
    <Styled.CircleFour />
  </Styled.Loading>
);
