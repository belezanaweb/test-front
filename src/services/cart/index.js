import { api } from 'services/api'

import { BAG_ID } from 'constants/config'

export const getProdutos = async () => {
  try {
    const { data } = await api.get(BAG_ID)
    return data
  } catch (err) {
    console.log(err)
  }
}
