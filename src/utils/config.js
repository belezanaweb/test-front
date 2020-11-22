const dev = {
  baseUrl: {
    url: 'http://www.mocky.io/v2'
  }
}

let config = dev

export default {
  TokenLifetime: '300',
  timeoutApi: 60000,
  ...config
}
