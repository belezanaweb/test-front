import React from 'react'

/**
 * Components
 */
import { Page, PageContainer, Container } from '../../components/Utils/styles'
import Header from '../../components/Header'
import Products from '../../components/Products'

const Bag = () => {
  return (
    <Page>
      <PageContainer>
        <Container>
          <Header />
        </Container>
        <Container my="20px" mx="20px">
          <Products />
        </Container>
      </PageContainer>
    </Page>
  )
}

export default Bag
