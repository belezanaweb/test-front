import axios from 'axios'

class DataStorage {
  getData() {
    axios
      .get('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem('items', `${JSON.stringify(response.data.items)}`)
          localStorage.setItem('subTotal', `${JSON.stringify(response.data.subTotal)}`)
          localStorage.setItem('shippingTotal', `${JSON.stringify(response.data.shippingTotal)}`)
          localStorage.setItem('discount', `${JSON.stringify(response.data.discount)}`)
          localStorage.setItem('total', `${JSON.stringify(response.data.total)}`)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  getProductItems() {
    const items = JSON.parse(localStorage.getItem('items'))

    return items.map((item, index) => {
      const json = {
        title: item.product.name,
        image: {
          src: item.product.imageObjects[0].small,
          title: `Product ${index + 1}`
        },
        price: item.product.priceSpecification.price
      }

      return json
    })
  }

  getResume() {
    return {
      sub_total: JSON.parse(localStorage.getItem('subTotal')),
      shipping_total: JSON.parse(localStorage.getItem('shippingTotal')),
      discount: JSON.parse(localStorage.getItem('discount')),
      total: JSON.parse(localStorage.getItem('total'))
    }
  }

  setPaymentData(card_number, cardholder_name, expiration_date) {
    localStorage.setItem('card_number', this.state.card_number)
    localStorage.setItem('card_name', this.state.cardholder_name)
    localStorage.setItem('card_expiration', this.state.expiration_date)
  }

  getPaymentData() {
    let card_num = localStorage.getItem('card_number')
    return {
      card_number: '****.****.****.' + card_num.substring(card_num.length - 4),
      card_name: localStorage.getItem('card_name').toUpperCase(),
      card_expiration: localStorage.getItem('card_expiration')
    }
  }
}

export default new DataStorage()
