import RequestService from './request.service'

export async function getCart() {
  const { data } = await RequestService.get('/v2/5b15c4923100004a006f3c07')
  return data
}
