import styled from 'styled-components/macro';

import { IImageStyles } from './card.interface';

export const Card = styled.article<IImageStyles>`
  background: ${(props) => props.theme.card.backgroundColor};
  border: 0.1rem solid ${(props) => props.theme.card.borderColor};
  border-radius: 0.3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1.5rem;
  min-height: ${(props) => (props.presentation ? '6.4rem' : '9rem')};
  padding: 1rem;

  &:first-child {
    margin-top: 0;
  }
`;

export const Figure = styled.figure<IImageStyles>`
  height: ${(props) => (props.presentation ? '4.2rem' : '6.5rem')};
  width: ${(props) => (props.presentation ? '4.2rem' : '6.5rem')};
`;

export const Image = styled.img<IImageStyles>`
  height: ${(props) => (props.presentation ? '4.2rem' : '6.5rem')};
  width: ${(props) => (props.presentation ? '4.2rem' : '6.5rem')};
`;

export const Description = styled.dl<IImageStyles>`
  padding-bottom: ${(props) => (props.presentation ? '0' : '2rem')};
  padding-left: 1rem;
  position: relative;
`;

export const Title = styled.dt<IImageStyles>`
  color: ${(props) => props.theme.card.title.color};
  font-size: 1.3rem;
  margin-bottom: ${(props) => (props.presentation ? '0' : '1.5rem')};
`;

export const Price = styled.dd`
  color: ${(props) => props.theme.card.price.color};
  font-size: 1.4rem;
  font-weight: 700;
  position: absolute;
  bottom: 0.4rem;
  right: 1rem;
`;
