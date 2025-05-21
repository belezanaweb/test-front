import { describe, it, expect, vi, beforeEach } from 'vitest';
import { BagProductsService, ENDPOINT_PATH } from './bag-products.services';

describe('BagProductsService', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('must return the products when the request is successful', async () => {
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

    expect(fetch).toHaveBeenCalledWith(ENDPOINT_PATH);
    expect(result).toEqual(mockResponse);
  });

  it('should throw error when response is not ok', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: false,
      } as Response)
    );

    await expect(BagProductsService.getBagProducts()).rejects.toThrow('Erro na requisição');
  });
});
