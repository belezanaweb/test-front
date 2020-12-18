import * as React from 'react';

import { ICardProps } from './card.interface';
import * as Styled from './card.styled';

export const Card: React.FC<ICardProps> = ({ image, title, price }) => (
  <Styled.Card>
    <Styled.Figure>
      <Styled.Image src={image} alt={title} />
    </Styled.Figure>
    <Styled.Description>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Price>R$ {price}</Styled.Price>
    </Styled.Description>
  </Styled.Card>
);
