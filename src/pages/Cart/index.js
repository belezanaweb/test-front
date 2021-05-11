import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setCartItems } from '../../actions/cartActios'
import { Button, List, TotalInfos, Typography } from '../../components'
import { getCartItems } from '../../services/cart'

import {
  Container,
  CardProducts,
  Title,
  CardTotal,
  ContainerButton,
  CustomButtom,
  ContainerInfos,
  Infos,
  ContainerTitle
} from './styles.css'

const Cart = () => {
  const { infos } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    const getData = async () => {
      const { data } = await getCartItems()
      dispatch(setCartItems(data))
    }

    getData()
  }, [dispatch])

  return (
    <Container>
      <ContainerTitle>
        <Title>
          <Typography>Produtos</Typography>
        </Title>
      </ContainerTitle>
      <ContainerInfos>
        <Infos>
          <CardProducts>
            <List
              items={infos.items?.map((item) => ({
                key: item.product.sku,
                imageURL: item.product.imageObjects[0].extraLarge,
                name: item.product.name,
                price: item.product.priceSpecification.price
              }))}
            />
          </CardProducts>
          <CardTotal>
            <TotalInfos
              discount={infos.discount}
              shippingTotal={infos.shippingTotal}
              subTotal={infos.subTotal}
              total={infos.total}
            />
          </CardTotal>
        </Infos>
      </ContainerInfos>
      <ContainerButton>
        <CustomButtom>
          <Button label="Seguir para o pagamento" />
        </CustomButtom>
      </ContainerButton>
    </Container>
  )
}

export default Cart
