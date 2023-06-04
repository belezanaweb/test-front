import Products from '../components/Products';
import { fetchCartProducts } from '../services/cart';
import { dehydrate, QueryClient } from '@tanstack/react-query';

export default function Cart() {
  return <Products />;
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
