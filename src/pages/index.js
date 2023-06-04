import { dehydrate, QueryClient } from '@tanstack/react-query';
import { fetchCartProducts } from '../services/cart';
import Tabs from '../components/Tabs';
import Tab from '../components/Tabs/Tab';
import Products from '../components/Products';
import TabContent from '../components/TabContent';
import CartResume from '../components/CartResume';
import { checkoutTabs } from '../enums/checkoutTabs';

const { BAG_TAB, PAYMENT_TAB, CONFIRMATION_TAB } = checkoutTabs;

export default function Checkout() {
  return (
    <>
      <Tabs value={BAG_TAB}>
        <Tab value={BAG_TAB}>Sacola</Tab>
        <Tab value={PAYMENT_TAB}>Pagamento</Tab>
        <Tab value={CONFIRMATION_TAB}>Confirmação</Tab>
      </Tabs>
      <TabContent>
        <Products />
      </TabContent>
      <CartResume />
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
