import React from 'react';
import { currency as format } from '_modules/formatter';
import * as S from './Typography.styled';

interface Props extends S.Align {
  currency?: boolean,
  value: number | string | undefined,
  type: keyof typeof S,
  className?: string,
}

const Typography: React.FC<Props> = ({
  type,
  currency = false,
  align = 'start',
  value = 0,
  className,
}): React.ReactElement => {
  const Element = S[type];

  return (
    <Element align={align} className={className} data-testid='typography'>
      {currency ? format(value as number) : value.toString()}
    </Element>
  );
};

export default Typography;
