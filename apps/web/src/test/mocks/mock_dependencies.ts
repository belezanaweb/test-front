import { CartRepository } from "@/data/repositories/cart_repository"
import { CartResponse } from "@/domain"
import { HttpClient } from "@/infra/http/http_client"

export class MockCartRepository implements CartRepository {
  fetchCartData = vi.fn().mockReturnValue({} as CartResponse)
}

export class MockHttpClient implements HttpClient {
  get = vi.fn().mockReturnValue({} as CartResponse)
}