import styled from "styled-components";

export const ProductsList = styled.div`
  > div + div {
    margin-top: 1.5rem;
  }
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 20px 25px;
  grid-template-areas:
    "card card"
    "author author"
    "valid cvv";

  .card {
    grid-area: card;
  }
  .author {
    grid-area: author;
  }
  .valid {
    grid-area: valid;
  }
  .cvv {
    grid-area: cvv;
  }
`;
