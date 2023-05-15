'use client'

import { CCartRepository } from '@/data/repositories/c_cart_repository'
import { CHttpClient } from '../http/c_http_client'

import { GetCartDataUseCase } from '@/domain'
import ProductsListPage from '@/presentation/products_list/products_list_page'

const BASE_URL = 'https://run.mocky.io/v3/d6e9a93f-9741-4494-b81e-637a8e9b8ddd'

export default function AppFactory() {
  const httpClient = new CHttpClient()
  const cartRepository = new CCartRepository(BASE_URL, httpClient)
  const useCase = new GetCartDataUseCase(cartRepository)

  return <ProductsListPage useCase={useCase} />
}
