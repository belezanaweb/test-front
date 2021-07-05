import React, { useState, useEffect } from "react";
import { useUserState } from "@belezanaweb/store";
import {
  Navigation,
  Banner,
  Header,
  MainWrapper,
  Container,
  PaymentDetails,
  ProductsList,
  PurchaseResume,
} from "@belezanaweb/components";

const ConfirmationPage = () => {
  const [productList, setProductList] = useState([]);
  const { cartResume, purchaseItemsResume, creditCardDetails } = useUserState();

  useEffect(() => {
    renderProductsList();
  }, []);

  const renderProductsList = () => {
    let newArr = [];

    for (let i = 0; i < cartResume.items.length; i++) {
      newArr[i] = {
        imageSrc: cartResume.items[i].imageSrc,
        imageAlt: cartResume.items[i].name,
        name: cartResume.items[i].name,
      };
    }
    setProductList(newArr);
  };
  return (
    <>
      <Header>
        <Navigation />
        <Banner
          icon="/images/icon-check.png"
          message="Compra efetuada com sucesso"
        />
      </Header>
      <MainWrapper>
        <Container label="Pagamento" labelType="h2">
          <PaymentDetails
            cardNumber={creditCardDetails.number}
            cardOwner={creditCardDetails.name}
            cardValidation={creditCardDetails.expirationDate}
          />
        </Container>
        <Container label="Produtos" labelType="h2">
          <ProductsList products={productList} />
        </Container>
        <PurchaseResume
          subTotal={purchaseItemsResume.subTotal}
          shippingTotal={purchaseItemsResume.shippingTotal}
          discount={purchaseItemsResume.discount}
          total={purchaseItemsResume.total}
        />
      </MainWrapper>
    </>
  );
};

export default ConfirmationPage;
