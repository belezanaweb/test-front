import axios from 'axios'

const resolveDefaultOptions = () => {
  try {
    const apiBaseUrl = 'http://www.mocky.io/v2/5b15c4923100004a006f3c07'

    return {
      baseURL: apiBaseUrl,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  } catch (error) {
    console.log(error)
    return {
      baseURL: '',
      headers: {}
    }
  }
}

const instance = axios.create(resolveDefaultOptions())

/**
 * Methods
 */
export const get = (url, dataParams = {}) =>
  instance
    .get(url, { params: dataParams })
    .then((result) => {
      const { data, status } = result
      return { data, status }
    })
    .catch((result) => {
      const { data, status } = result?.response || {}
      return { data, status }
    })
