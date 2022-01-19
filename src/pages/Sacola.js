import React, { useContext, useEffect } from 'react'
import Button from '../component/Button/Button'
import Card from '../component/Card/Card'
import CartTotal from '../component/CartTotal/CartTotal'
import ContainerPage from '../component/ContainerPage/ContainerPage'
import TitleContainer from '../component/TitleContainer/TitleContainer'
import { DataContext } from '../context/Context'
import { getData } from '../services/request'
import { useNavigate } from 'react-router-dom'
import * as S from './Sacola.styles'

const Sacola = () => {
  const [data, setData] = useContext(DataContext)
  const navigate = useNavigate()
  useEffect(() => {
    getData().then((res) => {
      setData(res.data)
    })
    // eslint-disable-next-line
  }, [])
  return (
    <ContainerPage deskFlex>
      <S.FirstContainer>
        <TitleContainer title={'PRODUTOS'}>
          {data.items?.map(({ product }) => {
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
          discountPrice={data?.discount}
          shippingPrice={data?.shippingTotal}
          productPrice={data?.subTotal}
          totalPrice={data?.total}
        />
        <Button text="SEGUIR PARA O PAGAMENTO" onClick={() => navigate('/pagamento')} />
      </S.SecondContainer>
    </ContainerPage>
  )
}

export default Sacola
