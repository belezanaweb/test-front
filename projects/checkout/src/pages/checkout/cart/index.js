import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useUserDispatch } from "@belezanaweb/store";
import { Client } from "@belezanaweb/services";
import { ProductsList, PurchaseResume } from "@belezanaweb/components";

const CartPage = () => {
  const [itemsList, setItemsList] = useState([]);
  const dispatch = useUserDispatch();

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
    const { data } = await Client.getPurchaseResume();
    console.log(data);

    let newArr = [];

    for (let i = 0; i < data.items.length; i++) {
      newArr[i] = {
        imageSrc: data.items[i].product.imageObjects[0].thumbnail,
        imageAlt: data.items[i].product.name,
        name: data.items[i].product.name,
        price: data.items[i].product.priceSpecification.price,
      };
    }
    setItemsList(newArr);

    dispatch({
      type: "purchaseItemsResume",
      value: {
        subTotal: data.subTotal,
        shippingTotal: data.shippingTotal,
        discount: data.discount,
        total: data.total,
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
        <ProductsList products={itemsList} />
      </section>

      <section>
        <PurchaseResume
          subTotal="624.8"
          shippingTotal="5.3"
          discount="30"
          total="618.9"
        />
      </section>
      <button type="submit" onClick={handleSubmit}>
        Seguir para o pagamento
      </button>
    </>
  );
};

export default CartPage;
