import styled from 'styled-components'

interface ITitleStyledProps {
  color?: string;
}

export const TitleStyled =
  styled.h1 <
  ITitleStyledProps >
  `
  margin: 5px 10px;
  color: ${({ color }) => color || '#999'};
  font-size: 14px;
  letter-spacing: 0;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1.214em;
`
