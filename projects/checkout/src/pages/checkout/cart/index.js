import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useUserDispatch, useUserState } from "@belezanaweb/store";
import { currency } from "@belezanaweb/utils";
import { Client } from "@belezanaweb/services";
import {
  Header,
  MainWrapper,
  Footer,
  Container,
  Navigation,
  Button,
  ProductsList,
  PurchaseResume,
} from "@belezanaweb/components";

const CartPage = () => {
  const [productList, setProductList] = useState([]);
  const dispatch = useUserDispatch();
  const { purchaseItemsResume } = useUserState();

  useEffect(() => {
    renderItens();
  }, []);

  const router = useRouter();

  /**
   * Get client purchased cart items from the API called: getPurchaseResume
   * populate the product array
   * dispatch content into UserStore
   */
  const renderItens = async () => {
    const response = await Client.getPurchaseResume();

    let newArr = [];

    for (let i = 0; i < response.data.items.length; i++) {
      newArr[i] = {
        imageSrc: response.data.items[i].product.imageObjects[0].small,
        imageAlt: response.data.items[i].product.name,
        name: response.data.items[i].product.name,
        price: currency(
          response.data.items[i].product.priceSpecification.price
        ),
      };
    }

    setProductList(newArr);

    /**
     * save cart items into store
     */
    dispatch({
      type: "saveCartResume",
      value: {
        id: response.data.id,
        items: newArr,
      },
    });

    /**
     * save purchase items price resume into store
     */
    dispatch({
      type: "savePurchaseItemsResume",
      value: {
        subTotal: response.data.subTotal,
        shippingTotal: response.data.shippingTotal,
        discount: response.data.discount,
        total: response.data.total,
      },
    });
  };

  const handleSubmit = () => {
    router.push("/checkout/payment");
  };

  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <MainWrapper>
        <Container label="Produtos">
          <ProductsList products={productList} />
        </Container>

        <PurchaseResume
          subTotal={purchaseItemsResume.subTotal}
          shippingTotal={purchaseItemsResume.shippingTotal}
          discount={purchaseItemsResume.discount}
          total={purchaseItemsResume.total}
        />
      </MainWrapper>
      <Footer>
        <Button onClick={handleSubmit} label="Seguir para o pagamento" />
      </Footer>
    </>
  );
};

export default CartPage;
