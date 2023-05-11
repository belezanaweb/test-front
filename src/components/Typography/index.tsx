import React from 'react';
import { currency as format } from '_modules/formatter';
import * as S from './Typography.styled';

interface Props extends S.Align, S.Pading {
  type: keyof typeof S,
  value: number | string | undefined,
  currency?: boolean,
  className?: string,
}

const Typography: React.FC<Props> = ({
  type,
  padding,
  align = 'start',
  currency = false,
  value = 0,
  className,
}): React.ReactElement => {
  const Element = S[type];

  return (
    <Element align={align} padding={padding} className={className} data-testid='component-typography'>
      {currency ? format(value as number) : value.toString()}
    </Element>
  );
};

export default Typography;
