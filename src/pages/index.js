import { useState } from 'react';
import { fetchCartProducts } from '../services/cart';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import Tabs from '../components/Tabs';
import Tab from '../components/Tab';
import Products from '../components/Products';
import { checkoutTabs } from '../enums/checkoutTabs';

const { BAG_TAB, PAYMENT_TAB, CONFIRMATION_TAB } = checkoutTabs;

export default function Cart() {
  const [activeTab, setActiveTab] = useState(BAG_TAB);

  return (
    <>
      <Tabs value={activeTab}>
        <Tab value={BAG_TAB} setActiveTab={setActiveTab}>
          Sacola
        </Tab>
        <Tab value={PAYMENT_TAB} setActiveTab={setActiveTab}>
          Pagamento
        </Tab>
        <Tab value={CONFIRMATION_TAB} setActiveTab={setActiveTab}>
          Confirmação
        </Tab>
      </Tabs>
      <Products />
    </>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['cart'], fetchCartProducts);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
