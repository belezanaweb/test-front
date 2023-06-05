import { useState } from 'react';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { fetchCartProducts } from '../services/cart';
import Tabs from '../components/Tabs';
import Tab from '../components/Tabs/Tab';
import ProductsDetails from '../components/ProductsDetails';
import TabContent from '../components/TabContent';
import CartResume from '../components/CartResume';
import CheckoutContext from '../contexts';
import { checkoutTabs } from '../enums/checkoutTabs';

const { BAG_TAB, PAYMENT_TAB, CONFIRMATION_TAB } = checkoutTabs;

const Checkout = () => {
  const [activeTab, setActiveTab] = useState(BAG_TAB);

  const checkoutContextValue = {
    currentTab: activeTab,
    setActiveTab,
  };

  return (
    <CheckoutContext.Provider value={checkoutContextValue}>
      <Tabs value={BAG_TAB}>
        <Tab value={BAG_TAB}>Sacola</Tab>
        <Tab value={PAYMENT_TAB}>Pagamento</Tab>
        <Tab value={CONFIRMATION_TAB}>Confirmação</Tab>
      </Tabs>
      <TabContent>
        <ProductsDetails />
      </TabContent>
      <CartResume />
    </CheckoutContext.Provider>
  );
};

export default Checkout;

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['cart'], fetchCartProducts);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
