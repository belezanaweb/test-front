const productsApis = {
  getAll: () => fetch('http://www.mocky.io/v2/5b15c4923100004a006f3c07').then((res) => res.json())
}

export { productsApis }
