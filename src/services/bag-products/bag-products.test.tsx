import { describe, it, expect, vi, beforeEach } from 'vitest';
import { BagProductsService } from './bag-products.services';

describe('BagProductsService', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('deve retornar os produtos quando a requisição for bem sucedida', async () => {
    const mockResponse = {
      items: [
        { product: { sku: '123', name: 'Produto Teste' } }
      ]
    };

    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse),
      } as Response)
    );

    const result = await BagProductsService.getBagProducts();

    expect(fetch).toHaveBeenCalledWith('https://run.mocky.io/v3/50d82eaa-3c0a-4d1e-aa19-c4a7e64cdef3');
    expect(result).toEqual(mockResponse);
  });

  it('deve lançar erro quando a resposta não for ok', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: false,
      } as Response)
    );

    await expect(BagProductsService.getBagProducts()).rejects.toThrow('Erro na requisição');
  });
});
