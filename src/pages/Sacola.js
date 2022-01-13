import React from 'react'
import ContainerPage from '../component/ContainerPage/ContainerPage'
import TitleContainer from '../component/TitleContainer/TitleContainer'

const Sacola = () => {
  return (
    <ContainerPage>
      <p>sacola</p>
      <TitleContainer title={'PRODUTOS'}>
        <div style={{ height: '20px' }}></div>
      </TitleContainer>
    </ContainerPage>
  )
}

export default Sacola
