import React from 'react';
import * as S from './Typography.styled';

interface Props {
  currency?: boolean,
  value: string | undefined,
  type: keyof typeof S,
  className?: string,
}

const Typography: React.FC<Props> = ({ type, value = 0, className }): React.ReactElement => {
  const Element = S[type];

  return (
    <Element className={className} data-testid='typography'>{value}</Element>
  );
};

export default Typography;
