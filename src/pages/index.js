import Product from '@/components/Product/Product';
import { fetchCartProducts } from '@/services/cart';
import { dehydrate, QueryClient } from '@tanstack/react-query';

export default function Cart() {
  return <Product />;
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
