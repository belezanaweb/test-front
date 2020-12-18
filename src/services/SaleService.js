const SaleService = {
  async getSale() {
    try {
      return await fetch('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
    } catch (error) {
      return null
    }
  }
}

export default SaleService
