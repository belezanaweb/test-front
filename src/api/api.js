import axios from 'axios'

import { handleError } from './api-utils'

export const apiData = () => {
  const url = 'http://www.mocky.io/v2/5b15c4923100004a006f3c07'

  return axios.get(url).catch((err) => handleError(err))
}
