import React, { useState, useEffect } from "react";
import { useUserState } from "@belezanaweb/store";
import {
  Navigation,
  MainWrapper,
  Container,
  PaymentDetails,
  ProductsList,
  PurchaseResume,
} from "@belezanaweb/components";

const ConfirmationPage = () => {
  const [productList, setProductList] = useState([]);
  const { cartResume, purchaseItemsResume } = useUserState();

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
      <header>
        <Navigation />
      </header>
      <MainWrapper>
        <Container label="Pagamento" labelType="h2">
          <PaymentDetails
            cardNumber="1234"
            cardOwner="José da Silva"
            cardValidation="12/2024"
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
