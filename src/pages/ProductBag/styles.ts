import styled, { css } from 'styled-components'

export const ProdctBagStyled = styled('section')`
  padding: 2rem 0;
  h3 {
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.textGrey};
  }

  @media (max-width: 767px) {
    padding: 1.5rem 0;
  }
`

export const ProductItemStyled = styled('div')`
  padding: ${(props) => props.theme.spacing};
  border-radius: 3px;
  border: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.spacing};
  }
  img {
    width: 65px;
    flex-shrink: 0;
    margin-right: ${(props) => props.theme.spacing};
  }
  .price {
    margin-top: ${(props) => props.theme.spacing};
    font-weight: bold;
    text-align: right;
    font-size: 1.1rem;
  }
`
