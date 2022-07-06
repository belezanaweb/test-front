import { belezaNaWebApi } from '../../api'

export const getBag = async () => {
  const { data } = await belezaNaWebApi.get<ProductBag>('5b15c4923100004a006f3c07')
  return data
}
