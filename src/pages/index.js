import { useState } from 'react';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { fetchCartProducts } from '../services/cart';
import Tabs from '../components/Tabs';
import Tab from '../components/Tabs/Tab';
import ProductsDetails from '../components/ProductsDetails';
import PaymentForm from '../components/PaymentForm';
import TabContent from '../components/TabContent';
import CartResume from '../components/CartResume';
import CheckoutContext from '../contexts';
import { checkoutTabs } from '../enums/checkoutTabs';

const { BAG_TAB, PAYMENT_TAB, CONFIRMATION_TAB } = checkoutTabs;

const Checkout = () => {
  const [activeTab, setCurrentTab] = useState(BAG_TAB);

  const checkoutContextValue = {
    currentTab: activeTab,
    setCurrentTab,
  };

  return (
    <CheckoutContext.Provider value={checkoutContextValue}>
      <Tabs value={BAG_TAB}>
        <Tab value={BAG_TAB}>Sacola</Tab>
        <Tab value={PAYMENT_TAB}>Pagamento</Tab>
        <Tab value={CONFIRMATION_TAB}>Confirmação</Tab>
      </Tabs>
      <TabContent>
        {activeTab === BAG_TAB && <ProductsDetails />}
        {activeTab === PAYMENT_TAB && <PaymentForm />}
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
