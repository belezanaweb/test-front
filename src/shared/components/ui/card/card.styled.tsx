import styled from 'styled-components/macro';

export const Card = styled.article`
  background: ${(props) => props.theme.card.backgroundColor};
  border: 0.1rem solid ${(props) => props.theme.card.borderColor};
  border-radius: 0.3rem;
  display: flex;
  flex-direction: row;
  margin-top: 1.5rem;
  min-height: 9rem;
  padding: 1rem;

  &:first-child {
    margin-top: 0;
  }
`;

export const Figure = styled.figure`
  height: 6.5rem;
  width: 6.5rem;
`;

export const Image = styled.img`
  height: 6.5rem;
  width: 6.5rem;
`;

export const Description = styled.dl`
  padding-bottom: 2rem;
  padding-left: 1rem;
  position: relative;
`;

export const Title = styled.dt`
  color: ${(props) => props.theme.card.title.color};
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
`;

export const Price = styled.dd`
  color: ${(props) => props.theme.card.price.color};
  font-size: 1.4rem;
  font-weight: 700;
  position: absolute;
  bottom: 0.4rem;
  right: 1rem;
`;
