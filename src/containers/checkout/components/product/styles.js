import styled from 'styled-components'

export const Container = styled.div`
  border: 1px solid var(--background);
  border-radius: 3px;
  padding: 10px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    'img name name name'
    'img price price price';

  img {
    grid-area: img;
    height: 65px;
    width: 65px;
    margin-right: 10px;
  }

  .name {
    grid-area: name;
    font-size: 13px;
    line-height: 16px;
  }

  .price {
    grid-area: price;
    text-align: end;
  }
`
