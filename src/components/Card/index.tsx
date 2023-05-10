import React from 'react';
import { Product } from '_types/responses/bag';
import Typography from '_components/Typography';
import * as S from './Card.styled';

interface Props extends Product {
  showValues?: boolean;
};

const Card: React.FC<Props> = ({ showValues = false, ...props }): React.ReactElement => (
  <S.Wrapper>
    <S.Image src={props.imageObjects[0].small} />
    <Typography type='Paragraph' value={props.name} />

    {showValues && (
      <S.Values>
        {!!props.priceSpecification.discount && <Typography currency type='ValueDisabled' value={props.priceSpecification.maxPrice} />}
        <Typography currency type='ValueBold'  value={props.priceSpecification.price} />
      </S.Values>
    )}
  </S.Wrapper>
);

export default Card;
