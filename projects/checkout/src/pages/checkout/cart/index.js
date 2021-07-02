import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useUserDispatch, useUserState } from "@belezanaweb/store";
import { Client } from "@belezanaweb/services";
import { ProductsList, PurchaseResume } from "@belezanaweb/components";

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
    console.log(response);
    let newArr = [];

    for (let i = 0; i < response.data.items.length; i++) {
      newArr[i] = {
        imageSrc: response.data.items[i].product.imageObjects[0].thumbnail,
        imageAlt: response.data.items[i].product.name,
        name: response.data.items[i].product.name,
        price: response.data.items[i].product.priceSpecification.price,
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
      <h1>Hello from Cart Page</h1>
      <nav>
        <ul>
          <li>Sacola</li>
          <li>Pagamento</li>
          <li>Confirmação</li>
        </ul>
      </nav>
      <section>
        <h1>Produtos</h1>
        <ProductsList products={productList} />
      </section>

      <section>
        <PurchaseResume
          subTotal={purchaseItemsResume.subTotal}
          shippingTotal={purchaseItemsResume.shippingTotal}
          discount={purchaseItemsResume.discount}
          total={purchaseItemsResume.total}
        />
      </section>
      <button onClick={handleSubmit}>Seguir para o pagamento</button>
    </>
  );
};

export default CartPage;
