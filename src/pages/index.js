import { fetchCartProducts } from '../services/cart';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import Tabs from '../components/Tabs';
import Tab from '../components/Tabs/Tab';
import Products from '../components/Products';
import { checkoutTabs } from '../enums/checkoutTabs';

const { BAG_TAB, PAYMENT_TAB, CONFIRMATION_TAB } = checkoutTabs;

export default function Cart() {
  return (
    <>
      <Tabs value={BAG_TAB}>
        <Tab value={BAG_TAB}>Sacola</Tab>
        <Tab value={PAYMENT_TAB}>Pagamento</Tab>
        <Tab value={CONFIRMATION_TAB}>Confirmação</Tab>
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
