import React, { useEffect, useState } from 'react'
import request from '../../request'

export default function Cart() {
  const [produtos, setProduto] = useState([])

  useEffect(() => {
    request.getProdutos().then((res) => {
      const dadosProdutos = res.data
      setProduto(dadosProdutos)
    })
  })

  return (
    <div>
      <h1>Teste</h1>
      {produtos.items?.map((produto) => (
        <h2>
          {produto.product.name}
          {produto.product.priceSpecification.price}
        </h2>
      ))}
    </div>
  )
}
