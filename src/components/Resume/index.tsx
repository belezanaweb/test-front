import React from 'react';
import { ResponseBag } from '_types/responses/bag';
import Typography from '_components/Typography';
import * as S from './Resume.styled';

interface Props extends ResponseBag {
  action: React.ReactElement,
};

const Resume: React.FC<Props> = (props): React.ReactElement => (
  <S.Wrapper>
    <S.Sumary>
      <S.Item>
        <Typography type='Label' value={`Produtos: (${props.items?.length ?? 0} itens)`} />
        <Typography currency type='Value' value={props.subTotal ?? 0} />
      </S.Item>

      <S.Item>
        <Typography type='Label' value="Frete:" />
        <Typography currency type='Value' value={props.shippingTotal ?? 0} />
      </S.Item>

      <S.Item>
      <Typography type='Label' value="Desconto:" />
      <Typography currency type='ValuePrimary' value={props.discount ?? 0} />
      </S.Item>

      <S.Item>
        <Typography type='LabelStrong' value="Subtotal" />
        <Typography currency type='ValueStrong' value={props.total ?? 0} />
      </S.Item>
    </S.Sumary>

    {props.action}
  </S.Wrapper>
);

export default Resume;
