import React from 'react'
import InfoWrapper from '../../components/InfoWrapper'
import Menu from '../../components/Menu'
import * as S from './styles'
import { useCartDetails } from '../../hooks/useCartDetails'
import Product from '../../components/Product'
import Subtotal from '../../components/Subtotal'
import Loader from '../../components/Loader'
import { formatCreditCardNumber, formatExpirationDate } from '../../util/format'
import CartSuccess from '../../components/CartSuccess'
import Empty from '../../components/Empty'
import MediaMatch from '../../components/MediaMatch'
import Dropdown from '../../components/Dropdown'

export function Success() {
  const {
    discount,
    shippingTotal,
    subTotal,
    total,
    items,
    mounted,
    userPaymentInfo
  } = useCartDetails()
  return (
    <>
      {!mounted ? (
        <Loader />
      ) : (
        <>
          {Object.keys(userPaymentInfo).length === 0 ? (
            <>
              <S.Wrapper>
                <S.MenuWrapper>
                  <Menu activeLink="/success" />
                </S.MenuWrapper>
                <S.EmptyWrapper>
                  <Empty />
                </S.EmptyWrapper>
              </S.Wrapper>
            </>
          ) : (
            <>
              <S.Wrapper>
                <S.MenuWrapper>
                  <Menu activeLink="/success" />
                </S.MenuWrapper>
                <S.CartWrapper>
                  <S.StatusPaymentWrapper>
                    <S.StatusWrapper>
                      <CartSuccess />
                    </S.StatusWrapper>
                    <InfoWrapper title="PAGAMENTO">
                      <S.UserPaymentInfoWrapper>
                        <S.Text>
                          {userPaymentInfo.creditCard &&
                            formatCreditCardNumber(userPaymentInfo.creditCard)}
                        </S.Text>
                        <S.Text>
                          {userPaymentInfo.nameInCard.toUpperCase()}
                        </S.Text>
                        <S.Text>
                          {userPaymentInfo.expirationDate &&
                            formatExpirationDate(
                              userPaymentInfo.expirationDate
                            )}
                        </S.Text>
                      </S.UserPaymentInfoWrapper>
                    </InfoWrapper>
                    <MediaMatch greaterThan="medium">
                      <S.PaymentInfo>
                        <Subtotal
                          shippingTotal={shippingTotal}
                          subTotal={subTotal}
                          total={total}
                          discount={discount}
                        />
                      </S.PaymentInfo>
                    </MediaMatch>
                  </S.StatusPaymentWrapper>
                  <S.ProductPaymentInfoWrapper>
                    <MediaMatch greaterThan="medium">
                      <S.AcessibilityWrapper>
                        <Dropdown />
                      </S.AcessibilityWrapper>
                    </MediaMatch>
                    <InfoWrapper title="PRODUTOS">
                      <S.Product>
                        {items?.map((item) => (
                          <Product
                            key={item.product.sku}
                            name={item.product.name}
                            imageUrl={item.product.imageObjects[0].small}
                          />
                        ))}
                      </S.Product>
                    </InfoWrapper>
                    <MediaMatch lessThan="medium">
                      <S.PaymentInfo>
                        <Subtotal
                          shippingTotal={shippingTotal}
                          subTotal={subTotal}
                          total={total}
                          discount={discount}
                        />
                      </S.PaymentInfo>
                    </MediaMatch>
                  </S.ProductPaymentInfoWrapper>
                </S.CartWrapper>
              </S.Wrapper>
              <MediaMatch lessThan="medium">
                <S.AcessibilityWrapper>
                  <Dropdown />
                </S.AcessibilityWrapper>
              </MediaMatch>
            </>
          )}
        </>
      )}
    </>
  )
}
