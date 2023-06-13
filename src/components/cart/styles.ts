import styled from 'styled-components'

export const CartContainer = styled.div`
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 4px;
  margin: 20px 8px;

  .image {
    float: left;
    width: 20%;
  }
  .details {
    float: left;
    width: 55%;
  }
  .price {
    float: right;
    width: 25%;
  }

  .image {
    text-align: center;
  }

  .product {
    margin-bottom: 1.65rem;

    &:first-child {
      margin-top: 1.65rem;
    }

    &::before,
    &::after {
      content: '';
      display: table;
    }

    &::after {
      clear: both;
    }
  }

  .details {
    .description {
      margin: 0 15px;
      font-size: 0.75rem;
      line-height: 1rem;
    }
  }

  .price {
    text-align: right;
    font-size: 0.875rem;
    line-height: 1rem;
    padding-top: 1rem;

    span {
      display: block;
      margin-right: 10px;

      &.covered {
        color: #9b9b9b;
        text-decoration-line: line-through;
      }
    }
  }
`
