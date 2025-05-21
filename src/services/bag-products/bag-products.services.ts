import { BagProductResponse } from './bag-products.services.types'

export const ENDPOINT_PATH = 'https://run.mocky.io/v3/50d82eaa-3c0a-4d1e-aa19-c4a7e64cdef3'

export const BagProductsService = {
  getBagProducts: async (): Promise<BagProductResponse> => {
    const res = await fetch(ENDPOINT_PATH);
    if (!res.ok) throw new Error('Erro na requisição');
    return res.json();
  },
}
