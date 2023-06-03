import Text from '../components/shared/Text';
import { fetchCartProducts } from '@/services/cart';
import { useQuery, dehydrate, QueryClient } from '@tanstack/react-query';

export default function Cart() {
  const { data } = useQuery({
    queryKey: ['cart'],
    queryFn: fetchCartProducts,
  });

  return <Text>{data.subTotal}</Text>;
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
