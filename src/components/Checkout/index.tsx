import { useState, useRef } from 'react'
import { useCheckout, useDevice } from 'hooks'
import * as Styled from './styled'
import { Tabs, Card, SkeletonCheckout, Text, CheckoutItemsSummary, CheckoutPayment, Button } from 'components'
import { parse } from 'utils/money'
import { ImageObjects, ForwardRefProps } from './interfaces'
import { FormValues } from 'components/CheckoutPayment/interfaces'

const Checkout = () => {
  const formRef = useRef<null | ForwardRefProps>(null)

  const [usePaymentData, setPaymentData] = useState<FormValues | null>(null)
  const [useStepCheckout, setStepCheckout] = useState(0)
  const { isDesktop, isMobile, isTablet } = useDevice()
  const { isLoading, data, error } = useCheckout()

  const getImageReference = (imageObject: ImageObjects[]) => {
    const [image] = imageObject

    if (isDesktop) return image.medium
    if (isTablet) return image.small
    if (isMobile) return image.thumbnail

    return image.thumbnail
  }

  const onNextStep = () => {
    setStepCheckout(useStepCheckout + 1)
  }

  const hasProducts = data?.data?.items.length

  const CardProducts = () => (
    <Styled.CheckoutWrapper>
      <Styled.CardWrapper>
        <Card>
          <Styled.RowWrapper>
            {data?.data?.items?.map((d, i) => {
              return (
                <Styled.Row key={i}>
                  <img src={getImageReference(d.product.imageObjects)} alt="Foto do produto" />
                  <Text fullWidth>{d.product.name}</Text>

                  <Styled.PriceWrapper>
                    {d.product.priceSpecification.maxPrice !== d.product.priceSpecification.originalPrice && (
                      <Text $color="grey" decoration="line-through">
                        {parse(d.product.priceSpecification.maxPrice)}
                      </Text>
                    )}
                    <Text weight="bold">
                      {parse(d.product.priceSpecification.maxPrice - d.product.priceSpecification.discount)}
                    </Text>
                  </Styled.PriceWrapper>
                </Styled.Row>
              )
            })}
          </Styled.RowWrapper>
        </Card>
      </Styled.CardWrapper>
      <CheckoutItemsSummary summary={data.data} />

      <Styled.Row>
        <Button text="Seguir para pagamento" onClick={onNextStep} fullWidth />
      </Styled.Row>
    </Styled.CheckoutWrapper>
  )

  const CardPayment = () => (
    <Styled.CheckoutWrapper>
      <Styled.CardWrapper>
        <Card>
          <Styled.RowWrapper>
            <Text size="huge">Cartão de crédito</Text>
            <CheckoutPayment ref={formRef} onPaymentSuccess={onNextStep} />
          </Styled.RowWrapper>
        </Card>
      </Styled.CardWrapper>
      <CheckoutItemsSummary summary={data.data} />

      <Styled.Row>
        <Button
          text="Finalizar pedido"
          onClick={async () => {
            const { valid, values } = await formRef.current.submit()

            if (valid) {
              setPaymentData(values)
            }
          }}
          fullWidth
        />
      </Styled.Row>
    </Styled.CheckoutWrapper>
  )

  const CardConfirmation = () => (
    <Styled.CheckoutWrapper>
      <Styled.CardWrapper>
        <Card>
          <Styled.RowWrapper align="center">
            <Text size="huge">Compra efetuada com sucesso</Text>
            <Styled.CreditCardInfoWrapper>
              <Text $color="grey-strong" size="large">
                {usePaymentData?.creditCardNumber}
              </Text>
              <Text $color="grey-strong" size="large">
                {usePaymentData?.creditCardName}
              </Text>
              <Text $color="grey-strong" size="large">
                {usePaymentData?.creditCardExpiration}
              </Text>
            </Styled.CreditCardInfoWrapper>
          </Styled.RowWrapper>
        </Card>
      </Styled.CardWrapper>

      <Styled.Divider />

      <Styled.CardWrapper>
        <Card>
          <Styled.RowWrapper>
            <Text size="huge">Produtos</Text>

            <Styled.Divider />

            {data?.data?.items?.map((d, i) => {
              return (
                <Styled.Row key={i}>
                  <img src={getImageReference(d.product.imageObjects)} alt="Foto do produto" />
                  <Text fullWidth>{d.product.name}</Text>
                </Styled.Row>
              )
            })}
          </Styled.RowWrapper>
        </Card>
      </Styled.CardWrapper>
      <CheckoutItemsSummary summary={data.data} />

      <Styled.Row>
        <Button
          text="Voltar ao início"
          onClick={() => {
            setPaymentData(null)
            setStepCheckout(0)
          }}
          fullWidth
        />
      </Styled.Row>
    </Styled.CheckoutWrapper>
  )

  return (
    <Styled.Wrapper>
      {isLoading && <SkeletonCheckout />}
      {!isLoading && !error && hasProducts && (
        <Tabs
          value={useStepCheckout}
          onChange={(value: number) => setStepCheckout(value)}
          Tabs={[
            { content: <CardProducts />, title: 'Sacola' },
            { content: <CardPayment />, title: 'Pagamento', disabled: useStepCheckout < 1 },
            { content: <CardConfirmation />, title: 'Confirmação', disabled: true },
          ]}
        />
      )}
    </Styled.Wrapper>
  )
}

export default Checkout
