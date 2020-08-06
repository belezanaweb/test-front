import React from 'react'
import { Title } from '../Title'

import { ResumeWrapper, ResumeContent, ResumeItem, ResumeTitle, ResumeValue } from './style'


function Resume({ data, children }) {
  const { subTotal, total, shippingTotal, discount } = data;

  return (
    <ResumeWrapper>
      <Title> Resumo do pedido </Title>
      <ResumeContent>
        <ResumeItem>
          <ResumeTitle> Produtos </ResumeTitle>
          <ResumeValue> {subTotal?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) || ""} </ResumeValue>
        </ResumeItem>
        <ResumeItem>
          <ResumeTitle> Frete </ResumeTitle>
          <ResumeValue>  {shippingTotal?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) || ""} </ResumeValue>
        </ResumeItem>
        <ResumeItem color={'primary'}>
          <ResumeTitle > Desconto </ResumeTitle>
          <ResumeValue> -{discount?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) || ""} </ResumeValue>
        </ResumeItem>
        <ResumeItem color={'darkest'} weight={'700'}>
          <ResumeTitle> Total </ResumeTitle>
          <ResumeValue> {total?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) || ""} </ResumeValue>
        </ResumeItem>
      </ResumeContent>
      {children}
    </ResumeWrapper>
  )
}

export default Resume

