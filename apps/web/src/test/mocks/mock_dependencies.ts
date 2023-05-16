import { CartRepository } from "@/data/repositories/cart_repository"
import { CartModel } from "@/domain"
import { HttpClient } from "@/infra/http/http_client"

export class MockCartRepository implements CartRepository {
  fetchCartData = vi.fn().mockReturnValue({} as CartModel)
}

export class MockHttpClient implements HttpClient {
  get = vi.fn().mockReturnValue({} as CartModel)
}