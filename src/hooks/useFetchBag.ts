import { useQuery } from '@tanstack/react-query';
import { ResponseBag } from '_types/responses/bag';
import fetch from '_services/fetch';

export const fetchBag = async () =>
  await fetch.get<ResponseBag>('d6e9a93f-9741-4494-b81e-637a8e9b8ddd');

export const useFetchBag = () =>
  useQuery({
    queryKey: ['bag'],
    queryFn: fetchBag,
  });
