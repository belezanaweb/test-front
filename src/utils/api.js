const api = "http://www.mocky.io/v2/5b15c4923100004a006f3c07"

export const fetchShoppingCart = () =>
  fetch(`${api}`)
    .then(res => res.json())
    .then(data => data)
    .catch(() => console.log('There was an error. Try again.'))