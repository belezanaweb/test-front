import * as React from 'react';

import { ICardProps } from './card.interface';
import * as Styled from './card.styled';

export const Card: React.FC<ICardProps> = ({ image, title, price, presentation = false }) => (
  <Styled.Card presentation={presentation}>
    <Styled.Figure presentation={presentation}>
      <Styled.Image src={image} alt={title} presentation={presentation} />
    </Styled.Figure>
    <Styled.Description presentation={presentation}>
      <Styled.Title presentation={presentation}>{title}</Styled.Title>
      {!presentation && <Styled.Price>R$ {price}</Styled.Price>}
    </Styled.Description>
  </Styled.Card>
);
