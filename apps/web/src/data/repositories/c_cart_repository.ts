import { CartResponse } from '@/domain/models/cart';
import { HttpClient } from '@/infra/http/http_client';
import { CartRepository } from './cart_repository';

export class CCartRepository implements CartRepository {
  constructor(private readonly baseUrl: string, private readonly httpClient: HttpClient) {}

  async fetchCartData(): Promise<CartResponse> {
    const response = await this.httpClient.get(this.baseUrl);
    return response['data']
  }
}
