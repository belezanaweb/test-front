import React from 'react'
import { useSelector } from 'react-redux'

import { ClientInfo, List, SuccessMessage, TotalInfos, Typography } from '../../components'

import {
  Container,
  ContainerInfos,
  Infos,
  CardProducts,
  PaymentCard,
  Title,
  CardTotal
} from './styles.css'

const Success = () => {
  const { infos } = useSelector((state) => state.cart)
  const { paymentInfos } = useSelector((state) => state.payment)

  return (
    <Container>
      <SuccessMessage message="COMPRA EFETUADA COM SUCESSO" />
      <ContainerInfos>
        <Infos>
          <PaymentCard>
            <Title>
              <Typography>PAGAMENTO</Typography>
            </Title>
            <ClientInfo
              creditCard={paymentInfos.creditCard}
              name={paymentInfos.name}
              date={paymentInfos.validate}
            />
          </PaymentCard>
          <CardProducts>
            <Title>
              <Typography>Produtos</Typography>
            </Title>
            <List
              items={infos.items?.map((item) => ({
                key: item.product.sku,
                imageURL: item.product.imageObjects[0].extraLarge,
                name: item.product.name,
                price: item.product.priceSpecification.price
              }))}
            />
          </CardProducts>
        </Infos>
      </ContainerInfos>
      <ContainerInfos>
        <CardTotal>
          <TotalInfos
            discount={infos.discount}
            shippingTotal={infos.shippingTotal}
            subTotal={infos.subTotal}
            total={infos.total}
          />
        </CardTotal>
      </ContainerInfos>
    </Container>
  )
}

export default Success
