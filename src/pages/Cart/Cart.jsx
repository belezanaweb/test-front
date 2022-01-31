import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context/Context'
import request from '../../request'
import * as S from './Cart.styles'
import { useNavigate } from 'react-router-dom'

import ContainerPage from '../../component/ContainerPage'
import TitleContainer from '../../component/TitleContainer'
import Card from '../../component/Card'
import CartTotal from '../../component/CartTotal'
import Button from '../../component/Button'

export default function Cart() {
  const [produtos, setProduto] = useContext(DataContext)
  //const [produtos, setProduto] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    request.getProdutos().then((res) => {
      const dadosProdutos = res.data
      setProduto(dadosProdutos)
    })
  })

  return (
    <ContainerPage deskFlex>
      <S.FirstContainer>
        <TitleContainer title={'PRODUTOS'}>
          {produtos.items?.map(({ product }) => {
            return (
              <Card
                image={product.imageObjects[0]}
                name={product.name}
                price={product.priceSpecification.originalPrice}
                key={product.sku}
              />
            )
          })}
        </TitleContainer>
      </S.FirstContainer>
      <S.SecondContainer>
        <CartTotal
          discountPrice={produtos?.discount}
          shippingPrice={produtos?.shippingTotal}
          productPrice={produtos?.subTotal}
          totalPrice={produtos?.total}
        />
        <Button text="SEGUIR PARA O PAGAMENTO" onClick={() => navigate('/payment')} />
      </S.SecondContainer>
    </ContainerPage>

    //    <div>
    //      <h1>Teste</h1>
    //      {produtos.items?.map((produto) => (
    //        <h2>
    //          {produto.product.name}
    //          {produto.product.priceSpecification.price}
    //        </h2>
    //      ))}
    //    </div>
  )
}
