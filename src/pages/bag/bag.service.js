import belezaNaWebApi from '../../webApi'

const getBagProducts = async () => {
  const { data } = await belezaNaWebApi.get('5b15c4923100004a006f3c07')

  return data
}

export default getBagProducts
