import React, { useState, useEffect } from "react";
import { useUserState } from "@belezanaweb/store";
import { ProductsList, PurchaseResume } from "@belezanaweb/components";

const ConfirmationPage = () => {
  const [productList, setProductList] = useState([]);
  const { cartResume, purchaseItemsResume } = useUserState();

  console.log(cartResume);

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
      <nav>
        <ul>
          <li>Sacola</li>
          <li>Pagamento</li>
          <li>Confirmação</li>
        </ul>
      </nav>
      <section>
        <h1>Compra realizada com sucesso</h1>
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
    </>
  );
};

export default ConfirmationPage;
