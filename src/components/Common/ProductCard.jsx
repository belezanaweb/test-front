import React from 'react'
import styled from 'styled-components'

/**
 *  Function to render product in card default
 *  @property {string} img - img of the product
 *  @property {string} title - title of the product
 *  @property {number} price - price of the product
 */

export default function ProductCard({ img, title, price }) {
  return (
    <Container>
      <div>{img ? <img src={img} alt={title} /> : 'Produto sem imagem'}</div>
      <div>
        <h2>{title}</h2>
        <h3>{price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h3>
      </div>
    </Container>
  )
}

export const Container = styled.div`
  box-sizing: border-box;
  height: 90px;
  width: 100%;
  min-width: 316px;
  border-radius: 3px;
  border: 1px solid #eee;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 11px;

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
  }

  h2 {
    color: #212122;
    font-size: 13px;
    line-height: 16px;
    font-weight: normal;
    margin: 0;
  }

  h3 {
    color: #212122;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    text-align: right;
  }

  img {
    height: 65px;
    width: 65px;
  }
`
