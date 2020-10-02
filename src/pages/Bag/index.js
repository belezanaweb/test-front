import React from 'react'
import { PagesWrapper } from '../../AppStyle'
import Header from '../../components/Header'
import BackgroundBlock from '../../components/BackgroundBlock'
import styled from 'styled-components'
import ProductsList from './ProductsList'

const Content = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 0 10px;
  display: grid;
  gap: 20px;
`

const Bag = () => {
  return (
    <PagesWrapper>
      <Header selectedPage={"bag"} />
      <Content>
        <BackgroundBlock title={"PRODUTOS"} boxContent={<ProductsList />} />
      </Content>
    </PagesWrapper>
  )
}

export default Bag