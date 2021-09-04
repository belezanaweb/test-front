export const API_URL = 'http://www.mocky.io/v2/5b15c4923100004a006f3c07'

export function PRODUCTS_GET() {
  return {
    url: API_URL,
    options: {
      method: 'GET'
    }
  }
}
